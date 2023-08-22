import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import User from './User';
import UserDetails from './UserDetails';
import NavBar from './NavBar';

function AppRouter() {
  return (
    // <BrowserRouter>
    <>
       <NavBar/>
        <Routes>

            {/* <Route path='/' element={<App/>} /> */}
            <Route path='/' element={<User/>} />
            {/* <Route path="/user" element={<User />}/>  */}
            <Route path='/:id' element={<UserDetails/>} />
            <Route path='/add' element={<Add/>}  />
            <Route path='/edit/:id' element={<Edit/>} />
            <Route path='/delete/:id' element={<Delete/>} />
        </Routes>
    {/* // </BrowserRouter> */}
    </>
  )
}

export default AppRouter