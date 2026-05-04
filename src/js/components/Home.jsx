import React, { useState, useEffect, useRef } from 'react';
import SecondsCounter from './SecondsCounter';
import Controls from './Controls';

const Home = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(true);
  
  // Variables específicas para la cuenta atrás y la alerta
  const [isCountdown, setIsCountdown] = useState(false);
  const [countdownStart, setCountdownStart] = useState(0); // Punto de partida independiente
  const [alertAt, setAlertAt] = useState(null);           // Punto de alerta independiente
  
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimer(prev => {
          if (isCountdown) {
            if (prev > 0) return prev - 1;
            setIsActive(false); // Detener al llegar a 0
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isCountdown]);

  // Lógica de alerta corregida: Usamos la variable alertAt
  useEffect(() => {
    if (alertAt !== null && alertAt !== "" && timer === parseInt(alertAt)) {
      alert(`¡Atención! Se ha alcanzado el tiempo programado: ${alertAt} segundos.`);
    }
  }, [timer, alertAt]);

  // Función para aplicar el inicio de la cuenta atrás
  const handleApplyCountdown = () => {
    if (countdownStart > 0) {
      setTimer(countdownStart);
      setIsCountdown(true);
      setIsActive(true);
    }
  };

  return (
    <div>
      <SecondsCounter seconds={timer} />
      <Controls 
        onStop={() => setIsActive(false)}
        onResume={() => setIsActive(true)}
        onReset={() => {
          setTimer(0);
          setIsCountdown(false);
          setAlertAt(null);
        }}
        // Pasamos las funciones para actualizar nuestros nuevos estados
        onSetAlert={(val) => setAlertAt(val)}
        onSetCountdownStart={(val) => setCountdownStart(parseInt(val))}
        onStartCountdown={handleApplyCountdown}
      />
    </div>
  );
};

export default Home;