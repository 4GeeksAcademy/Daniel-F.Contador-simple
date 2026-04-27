import React, { useState, useEffect, useRef } from 'react';
import SecondsCounter from './SecondsCounter';
import Controls from './Controls';

const Home = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [targetTime, setTargetTime] = useState(null);
  const [isCountdown, setIsCountdown] = useState(false); // Nueva bandera
  
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimer(prev => {
          // Si es cuenta atrás y llega a 0, paramos
          if (isCountdown) {
            if (prev > 0) return prev - 1;
            setIsActive(false);
            return 0;
          }
          // Si no, sumamos normalmente
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isCountdown]);

  // Lógica para la alerta
  useEffect(() => {
    if (targetTime !== null && targetTime !== "" && timer === parseInt(targetTime)) {
      alert(`¡Atención! Se ha alcanzado el tiempo de ${targetTime} segundos.`);
    }
  }, [timer, targetTime]);

  // Función para manejar el punto de inicio
  const handleSetStartValue = (val) => {
    const value = parseInt(val);
    if (!isNaN(value)) {
      setTimer(value);
      setIsCountdown(value > 0); // Si el valor es > 0, activamos modo cuenta atrás
    } else {
      setTimer(0);
      setIsCountdown(false);
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
        }}
        onSetTarget={(val) => setTargetTime(val)}
        onSetStartValue={handleSetStartValue}
      />
    </div>
  );
};

export default Home;