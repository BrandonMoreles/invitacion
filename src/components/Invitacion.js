import React, { useEffect, useState } from 'react';
import "../estilos/invitacion.css";
import Ishah from '../img/isha.png';
import CountdownTimer from './CountdownTimer';
import Buho from "../img/buho.png";
import Pergamino from '../img/pergamino.png';
import QRCode from 'qrcode.react';
import whatsapp from "../img/whatsapp.png"

const Invitacion = () => {
  const [serverData, setServerData] = useState(null);
  const id = parseInt(window.location.href.split('/').pop());

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  function fetchDataFromServer() {
    fetch('http://localhost:8080/invitacion/' + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setServerData(data);
      })
      .catch(error => {
        console.error("Error al hacer la solicitud:", error);
      });
  }

  return (
    <div className='invitacion'>
      <div className='divImg'>
        <h3>Graduacion en honor a</h3>
        <img src={Ishah} className='Ishah' alt="Ishah" />
        <h2>ISHAH CHAVEZ</h2>
      </div>
      <p className='parrafo'>Te invito a que me acompañes en la celebracion de este logro, el dia <p>25/08/2023</p></p>
      <CountdownTimer />
      <div className='lugarContain'><img src={Pergamino} alt="Pergamino" /><p className='txtPergamino'>EL lugar sera</p><a>Click aqui para ver la ubicacion</a></div>
      <div className='divQr'>
        <p>Esta es tu invitacion, el codigo QR que se encuentra abajo es valida para {serverData?.cantidad} personas</p>
        <img className='buho' src={Buho} alt="Buho" />
        {serverData && (
          <QRCode
            value={JSON.stringify(serverData)}
            size={350}
            imageSettings={{
              src: Buho,
              height: 70,
              width: 70,
              excavate: true, // Excava el centro para mejor visualización (opcional)
              includeMargin: true
            }}
          />
        )}
      </div>
        <p className='confirm'>Por favor confirma su asistencia en la siguiente liga</p>
        <a href='https://www.facebook.com'>
    <img className='buho' src={whatsapp} alt="Buho" />
  </a> 

    </div>
  );
};

export default Invitacion;
