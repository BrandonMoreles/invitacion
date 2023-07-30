import React, { useEffect, useState } from 'react';
import '../estilos/modal.css';

const Modal = ({ cerrarModal }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    cantidad: 1,
    unicode: '',
  });

  useEffect(() => {
    const unicodeValue = Math.floor(Math.random() * 1000) * Math.floor(Math.random() * 10000); // Número aleatorio de 10 dígitos como string
    setFormData((prevData) => ({
      ...prevData,
      unicode: unicodeValue.toString(),
    }));
  }, []);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleAgregar = () => {
    // Realizar la solicitud POST al servidor
    fetch('http://localhost:8080/invitacion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        cerrarModal()
        // Aquí puedes manejar la respuesta del servidor si es necesario
        console.log('Respuesta del servidor:', data);
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud:', error);
      });
  };

  return (
    <div className='contenedor'>
      <p>Agregar invitado</p>
      <input
        type='text'
        placeholder='Nombre'
        id='nombre'
        value={formData.nombre}
        onChange={handleChange}
      />
      <div className='cantidad'>
        Cantidad de invitados
        <input
          id='cantidad'
          type='number'
          max={10}
          min={1}
          value={formData.cantidad}
          onChange={handleChange}
        />
      </div>
      <div className='divButton'>
        <button className='aceptar' onClick={handleAgregar}>
          Agregar
        </button>
        <button className='cancelar' onClick={cerrarModal}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Modal;
