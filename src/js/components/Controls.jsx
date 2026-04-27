import React from 'react';

const Controls = ({ onStop, onResume, onReset, onSetTarget, onSetStartValue }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onStop}>Parar</button>
      <button onClick={onResume}>Resumir</button>
      <button onClick={onReset}>Reiniciar</button>
      
      <div style={{ marginTop: '10px' }}>
        <label>Cuenta regresiva desde: </label>
        <input 
          type="number" 
          placeholder="Segundos iniciales..." 
          onChange={(e) => onSetStartValue(e.target.value)} 
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Alerta en: </label>
        <input 
          type="number" 
          placeholder="Segundos para alerta..." 
          onChange={(e) => onSetTarget(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default Controls;