import React from "react";
import { Alert as BootstrapAlert } from "bootstrap";

const Alert = ({ message, variant }) => {
  <BootstrapAlert variant={variant.alerta}>{message.msg}</BootstrapAlert>;
};

export default Alert;