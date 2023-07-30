import React, { useState, useEffect } from 'react';
import '../estilos/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from "./Modal.js";
import CardsInvite from './CardsInvite';

const Index = () => {
  const [modal, setModal] = useState(false);
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  useEffect(() => {
    fetchDataFromServer();
  }, [modal]);

  function fetchDataFromServer() {
    fetch('http://localhost:8080/invitacion')
      .then(response => response.json())
      .then(data => {
        setServerData(data);
      })
      .catch(error => {
        console.error("Error al hacer la solicitud:", error);
      });
  }

  function toggleModal() {
    setModal(!modal);
  }

  // Función para volver a obtener los datos del servidor después de borrar una invitación
  function refreshDataFromServer() {
    fetchDataFromServer();
  }

  return (
    <div className='container'>
      {modal ? <Modal cerrarModal={toggleModal} /> : ""}
      <h2>Bienvenida Ishah</h2>
      <h5 className='add'><FontAwesomeIcon icon={faPlus} onClick={toggleModal} /></h5>

      {/* Renderiza los componentes CardsInvite usando map */}
      {serverData && Object.values(serverData).map((element) => (
          <CardsInvite
            key={element.id} // Agrega una clave única para cada invitado
            invitado={element}
            refreshDataFromServer={refreshDataFromServer} // Pasa la función como prop
          />
      ))}
    </div>
  );
}

export default Index;
