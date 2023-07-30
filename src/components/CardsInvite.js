import React from 'react';
import"../estilos/cardsinv.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CardsInvite = ({ invitado, refreshDataFromServer }) => {
  // Función para borrar la invitación por su ID
  function deleteInvitacion(id) {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres borrar esta invitación?');
    if (confirmDelete) {
      fetch(`http://localhost:8080/invitacion/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            console.log(`Invitación con ID ${id} borrada exitosamente.`);
            // Llama a la función del componente Index para obtener los datos actualizados
            refreshDataFromServer();
          } else {
            console.error('Error al borrar la invitación.');
          }
        })
        .catch(error => {
          console.error("Error al hacer la solicitud:", error);
        });
    }
  }

  return (
    <div className='divCard'>
      <p className='cardName'>{invitado.nombre}</p>
      <p className='cardCantidad'>{invitado.cantidad}</p>
      <div className='iconDiv'>
        <p
          className='verifyColor'
          style={{ backgroundColor: invitado.verify ? "#333" : "#999" }}
        ></p>
        <FontAwesomeIcon
          icon={faTrash}
          onDoubleClick={() => deleteInvitacion(invitado.id)}
        />
      </div>
    </div>
  );
};

export default CardsInvite;
