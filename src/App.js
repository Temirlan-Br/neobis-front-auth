import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Reg from './pages/Registr/Reg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
