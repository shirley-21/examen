import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Components/Navbar'; // Barra de navegación
import UserForm from './Components/UserForm'; // Formulario de registro
import CrudView from './Components/CrudView'; // Vista CRUD

function App() {
  return (
    <div className="App">
      {/* Barra de navegación */}
      <AppNavbar />

      {/* Formulario de registro */}
      <div className="container my-5">
        <h2 className="mb-4">Registro de Usuario</h2>
        <UserForm />
      </div>

      {/* Vista CRUD */}
      <div className="container my-5">
        <h2 className="mb-4">Gestión de Usuarios</h2>
        <CrudView />
      </div>
    </div>
  );
}

export default App;
