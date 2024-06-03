import React from "react";
import { useState } from "react";
import "bootstrap";
import Alert from "./Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [clave, setPassword] = useState("");
  const [confirmaclave, setConfirmaPassword] = useState("");

  const validaentradas = (e) => {
    e.preventDefault();

    if (nombre == "" || email === "" || clave === "" || confirmaclave === "") {
      alert("Todos los Campos Deben estar Completos ");
    }

    // Valida Cada Input
    if (clave !== confirmaclave) {
      alert("Error en Clave");
      setAlert({ message: "Las contraseñas no coinciden.", variant: "danger" });
    } else {
      alert("No Hay Error");
    }
  };

  return (
    <>
      <div className="formucontenedor">
        <form onSubmit={validaentradas}>
          <div className="form-floating mb-3">
            <input
              type="text"
              classname="form-control"
              id="nombre"
              placeholder="Tu Nombre"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              classname="form-control"
              id="email"
              placeholder="tucorreo@tudominio.cl"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              classname="form-control"
              id="clave"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={clave}
            />
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              classname="form-control"
              id="confirmaclave"
              placeholder="Repite tu Contraseña"
              onChange={(e) => setConfirmaPassword(e.target.value)}
              value={confirmaclave}
            />
          </div>
          <button type="submit" classname="btn btn-success">
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
