import React, { useState, useEffect } from 'react';
import '../estilos/timer.css'
const CountdownTimer = () => {
  // Fecha objetivo para la cuenta regresiva (YYYY-MM-DD)
  const targetDate = new Date('2023-08-25T19:00:00');

  // Estado para almacenar el tiempo restante
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  // Función para calcular el tiempo restante
  function getTimeRemaining() {
    const now = new Date();
    const timeDiff = targetDate.getTime() - now.getTime();

    // Calculamos los días, horas, minutos y segundos restantes
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  // Función que se ejecuta cada segundo para actualizar el tiempo restante
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='timerContain'>
      <h1>Faltan</h1>
      <div className='divNumbers'>
        <p className='numbers'>Días: <p>{timeRemaining.days}</p></p>
        <p className='numbers'>Horas: <p>{timeRemaining.hours}</p></p>
        <p className='numbers'>Minutos: <p>{timeRemaining.minutes}</p></p>
        <p className='numbers'>Segundos: <p>{timeRemaining.seconds}</p></p>
      </div>
    </div>
  );
};

export default CountdownTimer;
