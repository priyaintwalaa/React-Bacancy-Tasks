// import Home from "./Components/Home";
// import { Routes, Route } from "react-router-dom";
// import User from "./Components/User";
// import NavBar from "./Components/NavBar";
import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigat = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  return (
    // <>
    // <NavBar/>
    // <Routes>
    //   <Route path='/' element={<Home/>}></Route>
    //   <Route path="/user" element={<User/>}></Route>
    // </Routes>
    // </>
    <div className="container mt-5">
      <div className="text-end"><Link to="/user/add" className="btn btn-primary">Add +</Link></div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c,i)=>(
              <th key={i}>{c}</th>
            ))}
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((d,i)=>(
              <tr key={i}>
                 <td>{d.id}</td>
                 <td>{d.name}</td>
                 <td>{d.email}</td>
                 <td>
                  <Link to={`/user/edit/${d.id}`} className="btn btn-sm btn-success">Edit</Link>
                  <Link to={`/user/delete/${d.id}`} className="btn btn-sm ms-1 btn-danger">Delete</Link> 
                  {/* <button onClick={e=> handleSubmit(d.id)} className="btn btn-sm ms-1 btn-danger">Delete</button> */}
                  
                 </td> 
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );

  // function handleSubmit(id){
  //    const confirm = window.confirm("Do you really want to delete?")
  //    if(confirm){
  //     axios.delete('http://localhost:3030/users/'+id)
  //     .then(res =>{
  //       alert('record are deleted')
  //       navigat('/')
  //     }).catch(err => console.log(err))
  //    }
  // }
}

export default App;
