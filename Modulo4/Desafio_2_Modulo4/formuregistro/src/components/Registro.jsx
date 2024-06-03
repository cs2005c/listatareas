import React from "react";
import SocialButton from "./SocialButton";

function Registro() {
  return (
    <>
      <p className="fs-1">Crea una Cuenta</p>
      <div className="logocontenedor">
        <SocialButton iconorrss="./src/assets/img/face-32.png" />
        <SocialButton iconorrss="./src/assets/img/gith-32.png" />
        <SocialButton iconorrss="./src/assets/img/link-32.png" />
      </div>
      <p className="fs-6 text center">o usa u e-mail para registrate</p>
    </>
  );
}

export default Registro;
