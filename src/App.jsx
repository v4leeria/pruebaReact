import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Logo from "./assets/img/logo.png";
import Marvel from "./assets/img/marvel.jpg";
import Footer from "./assets/img/rrss.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MiApi from "./componentes/MiApi/MiApi";

const App = () => {
  return (
    <div className="todo" id="inicio">
      <Navbar data-bs-theme="dark" className="navbar">
        <Container className="contenedorNavbar">
          <Image src={Logo} className="logo" />
          <Navbar.Brand href="#inicio">RATAMARVEL</Navbar.Brand>
          <Nav>
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#descripcion">Descripción</Nav.Link>
            <Nav.Link href="#personajes">Personajes</Nav.Link>
            <Nav.Link href="#footer">RRSS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="descripcion" id="descripcion">
        <h3>¿Qué es Marvel?</h3>
        <br />
        <p>
          Marvel es una de las principales editoras de cómics y una franquicia
          de entretenimiento multimedia conocida en todo el mundo. Fundada en
          1939 como Timely Publications y posteriormente conocida como Marvel
          Comics, la compañía ha creado y popularizado algunos de los personajes
          de cómic más icónicos y queridos de la cultura popular.
        </p>
      </div>
      <br />
      <Image src={Marvel} className="imgMarvel" />
      <br />
      <div id="personajes">
        <MiApi />
      </div>

      <br />
      <div className="footer" id="footer">
        <Image src={Footer} className="footerImg" />
      </div>
    </div>
  );
};

export default App;
