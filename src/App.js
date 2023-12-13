import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import RegPage from './pages/Registr/RegPage';
import Email from './pages/Email/Email';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/reg" element={<RegPage />} />
          <Route path="/mail" element={<Email />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
