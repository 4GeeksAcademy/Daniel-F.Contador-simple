import React, { useState, useEffect, useRef } from 'react';
import SecondsCounter from './SecondsCounter';
import Controls from './Controls';

const Home = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [targetTime, setTargetTime] = useState(null);
  
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  // Lógica para la alerta
  useEffect(() => {
    if (targetTime && timer === parseInt(targetTime)) {
      alert(`¡Se ha alcanzado el tiempo programado: ${targetTime} segundos!`);
    }
  }, [timer, targetTime]);

  return (
    <div>
      <SecondsCounter seconds={timer} />
      <Controls 
        onStop={() => setIsActive(false)}
        onResume={() => setIsActive(true)}
        onReset={() => setTimer(0)}
        onSetTarget={(val) => setTargetTime(val)}
      />
    </div>
  );
};

export default Home;