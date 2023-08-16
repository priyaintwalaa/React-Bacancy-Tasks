import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import User from "./Components/User";
import NavBar from "./Components/NavBar";
import AppRouter from "./Components/AppRouter";
import "./App.css"


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user" element={<User />}/> 
      </Routes>
    </>
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
