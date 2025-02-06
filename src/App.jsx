import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Singup';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;