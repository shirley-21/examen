import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src= "https://tecnosoluciones.com/wp-content/uploads/2024/04/Desarrollo-de-Aplicaciones-de-Realidad-Virtual-y-Realidad-Aumentada.jpg"
        alt="Primera imagen"
      />
      <Carousel.Caption>
        <h3>Explora el Futuro</h3>
        <p>Vive una experiencia inmersiva con la Realidad Aumentada.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://stefanini.com/post-images/portrait-of-man-with-glasses-of-virtual-reality-vr-interacts-with-virtual-screen.jpeg"
        alt="Segunda imagen"
      />
      <Carousel.Caption>
        <h3>Interacción Virtual</h3>
        <p>Transforma la manera en que interactuamos con el mundo real.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselComponent;
