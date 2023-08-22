import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

function User() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  // const navigat = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    }).catch(err => setRecords("error"));
  }, []);

  return (
    <div className="container mt-5">
            <div className="text-end">
              <Link to="/user/add" className="btn btn-primary">
                Add +
              </Link>
            </div>
            {
                records !== "error" ? <table className="table">
              <thead>
                <tr>
                  {columns.map((c, i) => (
                    <th key={i}>{c}</th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>
                      <Link
                        to={`/user/edit/${d.id}`}
                        className="btn btn-sm btn-success"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/user/delete/${d.id}`}
                        className="btn btn-sm ms-1 btn-danger"
                      >
                        Delete
                      </Link>
                      <Link
                        to={`/user/${d.id}`}
                        className="btn btn-sm ms-1 btn-success"
                      >
                        View
                      </Link>
                      {/* <button onClick={e=> handleSubmit(d.id)} className="btn btn-sm ms-1 btn-danger">Delete</button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            :<h3>No record found!</h3>
            }     
          </div>
  )}
export default User