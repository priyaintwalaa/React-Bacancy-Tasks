import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Delete() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigat = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios.delete("http://localhost:3030/users/" + id, data).then((res) => {
      alert("Data Deleted Succesfully");
      navigat("/user");
    });
  }

 function handleCancel(event){
    event.preventDefault();
    axios.get("http://localhost:3030/users/" + id).then(res=>{
         navigat("/user");
    })
 }

  return (

      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <label>Do you really want to delete?</label><br/>
            <button className="btn btn-info">Yes</button>
            <button className="btn btn-info" onClick={handleCancel}>No</button>
          </form>
        </div>
      </div>
    
  );
}

export default Delete;
