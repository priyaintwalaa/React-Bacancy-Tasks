// import React,{useState} from 'react'
import { useEffect, useState } from "react";
import { Outlet, Link, useNavigate, useParams } from "react-router-dom";
import {FaSortUp} from 'react-icons/fa'
// import { Navigate } from "react-router-dom";
import Modal from "react-modal";

function Users({ data, setData,viewObjData, deleteObj, editUserDetail, onisEditable }) {
 
  const navigate = useNavigate();
  const {id} = useParams();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [deleteid, setdeleteId] = useState();

//sorting
  const [isSorted,setIsSorted] = useState(false)

  const handleSortClick = ()=>{
    const sortedData = [...data]
    setIsSorted(!isSorted)
    sortedData.sort((a,b)=>{
     const NameA = a.name.toLowerCase()
     const NameB = b.name.toLowerCase()
     return  NameA.localeCompare(NameB);
    })
    setData(sortedData);
  }



  //search
  const [search, setSearch] = useState("");

  useEffect(()=>{
    if(id){
      setModalIsOpen(true)
    }
  },[id])

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const noOfPage = Math.ceil(data?.length / recordsPerPage);
  const numbers = [...Array(noOfPage + 1).keys()]?.slice(1);

  function prePage(){
     if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
     }
  }

  function changeCurrPage(num){
     setCurrentPage(num)
  }

  function nextPage(){
    if(currentPage !== noOfPage){
      setCurrentPage(currentPage + 1)
     }
  }

 

  function viewUser(d) {
    navigate(`/users/${d.id}`);
    viewObjData(d);
  }

  function editUser(d) {
    navigate(`/users/edit/${d.id}`);
    console.log(editUserDetail);
    editUserDetail(d);
    onisEditable();
  }

  const openModal = (userId) => {
    setModalIsOpen(true);
    navigate(`/users/delete/${userId}`)

    // setdeleteId(id);
    // navigate(`/users/delete/${id}`);
  };

  const closeModal = (e) => {
    e.preventDefault();
    navigate("/users");
    setModalIsOpen(false);
  };

  // const deleteFunc = (id) =>{
  //   openModal()
  //   setdeleteId(id)
  //   // deleteUser(id)
  //   navigate(`/users/delete/${id}`)
  // }

  const deleteUser = (e) => {
    e.preventDefault();
    
    deleteObj(+id);
    setModalIsOpen(false);
    navigate(`/users`);
  };

  const customStyles = {
    content: {
      width: "50%", // Adjust the width as needed
      height: "50%", // Adjust the height as needed
      margin: "auto",
    },
  };

  // function deleteUser(id){
  //   //  navigate(`/users/delete/${id}`)
  //   const afterDeleted = data.filter((item)=>item.id !== id)
  //    setData(afterDeleted)
  // }

  return (
    <div className="container mt-5">
      <input
        type="text"
        placeholder="search name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="text-end">
        <Link to="/users/add" className="btn btn-primary">
          Add +
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th >Name {<FaSortUp onClick={handleSortClick}/>}</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((d,i) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => editUser(d)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm ms-1 btn-danger"
                    onClick={()=>openModal(+d.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-sm ms-1 btn-success"
                    onClick={() => viewUser(d)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
    
          {modalIsOpen ? (
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              className="d-flex w-100 h-100 justify-content-center align-items-center"
            >
              <div className="w-50 border bg-light p-5">
                <form>
                  <label>Do you really want to delete?</label>
                  <br />
                  <button
                    className="btn btn-info"
                    onClick={deleteUser}
                  >
                    Yes
                  </button>
                  <button className="btn btn-info" onClick={closeModal}>
                    No
                  </button>
                </form>
              </div>
            </Modal>
          ) : (
            <div></div>
          )}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((num, index) => (
            <li
              className={`page-item ${currentPage === num ? "active" : ""}`}
              key={index}
            >
              <a href="#" className="page-link" onClick={()=>changeCurrPage(num)}>
                {num}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Users;
