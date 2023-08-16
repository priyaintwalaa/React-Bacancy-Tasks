import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import User from './User';
import UserDetails from './UserDetails';

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>

            {/* <Route path='/' element={<App/>} /> */}
            <Route path='/' element={<App/>} />
            <Route path="/user" element={<User />}/> 
            <Route path='/user/:id' element={<UserDetails/>} />
            <Route path='/user/add' element={<Add/>}  />
            <Route path='/user/edit/:id' element={<Edit/>} />
            <Route path='/user/delete/:id' element={<Delete/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter