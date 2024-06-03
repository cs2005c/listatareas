import { useState } from "react";
import Registro from "./components/Registro";
import SocialButton from "./components/SocialButton";
import Formulario from "./components/Fomulario";

function App() {
  return (
    <>
      <div className="contenedor">
        <Registro />
        <Formulario />
      </div>
    </>
  );
}

export default App;
