import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import AppNavbar from './Components/Navbar'; // Barra de navegación
import UserForm from './Components/UserForm'; // Formulario de registro
import CrudView from './Components/CrudView'; // Vista CRUD
import CarouselComponent from './Components/CarouselComponent'; // Carrusel de imágenes/videos
import ARModal from './Components/ARModal'; // Modal para contenido interactivo
function App() {
  return (
    <div className="App">
      {/* Barra de navegación */}
      <AppNavbar />

      {/* Encabezado con logo */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Shirley Sanchez Yanoja</p>
        <p>Profesor: Ing Ricardo Sanchez </p>
        <p>Curso: Aplicaciones Moviles </p>
      </header>

      {/* Sección de Información sobre Realidad Aumentada */}
      <section id="info" className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-4">¿Qué es la Realidad Aumentada?</h2>
            <p>
              La **Realidad Aumentada (RA)** es una tecnología que superpone
              objetos virtuales sobre el mundo real. Mediante dispositivos como
              smartphones, gafas o cámaras, la RA permite interactuar con objetos
              virtuales en tiempo real y en el contexto de nuestro entorno físico.
            </p>
            <h3>Aplicaciones</h3>
            <ul>
              <li>Entretenimiento y Videojuegos.</li>
              <li>Salud: Diagnósticos y entrenamiento.</li>
              <li>Educación: Simulaciones interactivas.</li>
              <li>Comercio: Probar productos virtualmente.</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img
              src="https://cdn-3.expansion.mx/dims4/default/60627e2/2147483647/strip/true/crop/2120x1414+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F90%2F32%2F833457db482092cab4fb5196aae2%2Fistock-1324380506.jpg"
              alt="Realidad Aumentada"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      {/* Carrusel de imágenes relacionadas con AR */}
      <div className="container mt-4">
        <h2 className="mb-4">Explora el Mundo de la Realidad Aumentada</h2>
        <CarouselComponent />
      </div>

      {/* Modal interactivo */}
      <div className="container mt-5">
        <h3 className="mb-4">Aprende Más sobre AR</h3>
        <ARModal />
      </div>

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
