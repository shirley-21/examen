import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const CrudView = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', age: '', email: '', phone: '', address: '' });
  const [editIndex, setEditIndex] = useState(null); // Agregar un estado para controlar el índice de edición

  const handleAddUser = () => {
    if (editIndex !== null) { 
      // Si estamos editando un usuario, actualizamos en lugar de agregar
      const updatedUsers = [...users];
      updatedUsers[editIndex] = newUser;
      setUsers(updatedUsers);
      setEditIndex(null); // Resetear el índice de edición
    } else {
      // Si no estamos editando, agregamos un nuevo usuario
      setUsers([...users, newUser]);
    }

    setNewUser({ name: '', age: '', email: '', phone: '', address: '' }); // Resetear el formulario
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleEditUser = (index) => {
    const userToEdit = users[index];
    setNewUser(userToEdit);  // Copiar los valores del usuario seleccionado al formulario
    setEditIndex(index);  // Guardar el índice para saber que estamos editando
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditUser(index)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDeleteUser(index)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="mt-4">
        <h3>{editIndex !== null ? 'Editar Usuario' : 'Agregar Usuario'}</h3>
        <input
          type="text"
          value={newUser.name}
          placeholder="Nombre"
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="number"
          value={newUser.age}
          placeholder="Edad"
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <input
          type="email"
          value={newUser.email}
          placeholder="Email"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          value={newUser.phone}
          placeholder="Teléfono"
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
        />
        <input
          type="text"
          value={newUser.address}
          placeholder="Dirección"
          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
        />
        <Button variant="primary" onClick={handleAddUser}>
          {editIndex !== null ? 'Actualizar' : 'Agregar'}
        </Button>
      </div>
    </div>
  );
};

export default CrudView;
