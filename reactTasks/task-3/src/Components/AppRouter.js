import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/user/add' element={<Add/>} />
            <Route path='/user/edit/:id' element={<Edit/>} />
            <Route path='/user/delete/:id' element={<Delete/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter