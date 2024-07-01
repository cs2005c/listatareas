import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Front from "../Components/Front";

const Contacto = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-center mb-3">
        Cuentanos, ¿en que te podemos ayudar?{" "}
      </h1>

      <Form onSubmit={handleSubmit} className="w-100">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form.Group controlId="formEmail" className="mb-3 w-100">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mb-3 w-100">
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" className="btn btn-danger mt-3">
                Enviar
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Contacto;
