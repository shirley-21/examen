import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

const CrudView = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ id: '', name: '', email: '' });
  const [editing, setEditing] = useState(false);

  const handleAdd = () => {
    setUsers([...users, { ...user, id: Date.now() }]);
    setUser({ id: '', name: '', email: '' });
  };

  const handleEdit = (id) => {
    const toEdit = users.find((u) => u.id === id);
    setUser(toEdit);
    setEditing(true);
  };

  const handleUpdate = () => {
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
    setEditing(false);
    setUser({ id: '', name: '', email: '' });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div id="crud" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        </Form.Group>
        <Button onClick={editing ? handleUpdate : handleAdd} variant="success">
          {editing ? 'Actualizar' : 'Agregar'}
        </Button>
      </Form>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(u.id)}>Editar</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(u.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudView;
