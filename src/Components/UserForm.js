import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', age: '', email: '', phone: '', address: '' });
  const [isRegistered, setIsRegistered] = useState(false);  // Nuevo estado para controlar si el usuario está registrado

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);  // Se activa después de enviar el formulario
  };

  return (
    <div>
      {/* Formulario de registro */}
      <Form onSubmit={handleSubmit} id="register" className="p-3">
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su edad"
            onChange={(e) => setUser({ ...user, age: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su teléfono"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su dirección"
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>

      {/* Mostrar el mensaje de éxito */}
      {isRegistered && (
        <Alert variant="success" className="mt-4">
          Usuario registrado con éxito!
        </Alert>
      )}

      {/* Mostrar los datos registrados después de enviar el formulario */}
      {isRegistered && (
        <div className="mt-5">
          <h3>Datos Registrados</h3>
          <Card>
            <Card.Body>
              <Card.Title>Información del Usuario</Card.Title>
              <p><strong>Nombre:</strong> {user.name}</p>
              <p><strong>Edad:</strong> {user.age}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Teléfono:</strong> {user.phone}</p>
              <p><strong>Dirección:</strong> {user.address}</p>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UserForm;
