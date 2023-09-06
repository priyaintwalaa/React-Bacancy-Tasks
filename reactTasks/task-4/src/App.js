import {Routes,Route} from "react-router-dom"
import React,{useState} from "react";
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Add from "./Components/Add";
import UsersDetail from "./Components/UsersDetail";
import UserHome from "./Components/UserHome";
import {UserList} from './userList'

function App() {

  console.log(UserList)
  const [data,setData] = useState(UserList)
  const [viewObj,setViewObj]=useState()
  const [editUser,setEditUser]=useState()
  const [isEditable,setEditable] = useState(false)

  function addUser(data){
    setData((prev)=>[...prev, data])
  }

  function onisEditable(){
    setEditable(true) 
   }

  function viewObjData(objofsingleuser){
    setViewObj(objofsingleuser)
  }

  const mapForEdit =(id, itemObj) => {
      console.log(id)
      console.log(itemObj)
      const filterData = data.map( (user) => user.id === id ? itemObj : user)
      setData(filterData)
  }

function editUserDetail(obj){
  setEditUser(obj)
  console.log(obj)
}

 const deleteObj = (id) => {
    const afterDeleted = data.filter((item)=>item.id !== id)
     console.log(afterDeleted,"afterdeleted")
     setData(afterDeleted)
  }
  
  return (
   <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<UserHome/>} > 
            <Route index element={<Users data={data} setData={setData} viewObjData={viewObjData} editUserDetail={editUserDetail}  onisEditable={onisEditable} />  } />
            <Route path='add' element={<Add addUser={addUser} data={data}/>}  />
            <Route path=':id' element={<UsersDetail viewObj={viewObj}  />} />
            <Route path='edit/:id' element={<Add editUser={editUser} isEditable={isEditable}  mapForEdit={mapForEdit}/>} /> 
            <Route path='delete/:id' element={<Users data={data} deleteObj={deleteObj} />} /> 
      </Route>
    </Routes>
    </>
  );
}

export default App;
