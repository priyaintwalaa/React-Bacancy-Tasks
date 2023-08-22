import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  return (
   
     <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-light p-5'>
      <div>
        <label>Name:</label>
        <p>{data.name}</p>
      </div>
      <div>
        <label>Email:</label>
        <p>{data.email}</p>
      </div>
      <button className='btn sm-1 btn-info' onClick={() => navigate(-1)}>Back</button>
    </div>
    </div>
  );
}

export default UserDetails;
