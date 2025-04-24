import React from 'react';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Writeups from './pages/Writeups.jsx';
import WriteupDetail from './pages/WriteupDetail.jsx'; // Importa WriteupDetail

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writeups" element={<Writeups />} />
        <Route path="/writeup/:id" element={<WriteupDetail />} /> {/* Ruta para la página de detalles */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;