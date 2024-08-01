 // src/App.js
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      
      
    
    </BrowserRouter>
  );
}

export default App;