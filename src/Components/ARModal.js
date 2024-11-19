import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ARModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ¿Qué es la Realidad Aumentada?
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Realidad Aumentada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          La Realidad Aumentada (AR) integra elementos virtuales al entorno real, mejorando la experiencia de usuario.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ARModal;
