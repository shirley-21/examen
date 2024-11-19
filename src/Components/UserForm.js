import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', age: '', email: '', phone: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Form onSubmit={handleSubmit} id="register" className="p-3">
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" placeholder="Ingrese su edad" onChange={(e) => setUser({ ...user, age: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su teléfono" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su dirección" onChange={(e) => setUser({ ...user, address: e.target.value })} />
      </Form.Group>
      <Button variant="primary" type="submit">Registrar</Button>
    </Form>
  );
};

export default UserForm;
