import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const InfoCards = () => (
  <Row>
    <Col md={4}>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Educación</Card.Title>
          <Card.Text>Utiliza AR para crear experiencias de aprendizaje inmersivas.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Salud</Card.Title>
          <Card.Text>Simulaciones médicas para diagnósticos precisos.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Marketing</Card.Title>
          <Card.Text>Crea experiencias interactivas para captar clientes.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default InfoCards;
