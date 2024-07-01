import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Barra from "./Components/Navbar";
import Home from "./Vistas/Home";
import Contacto from "./Vistas/Contacto";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Barra />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
