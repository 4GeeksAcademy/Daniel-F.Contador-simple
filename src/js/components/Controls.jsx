import React from 'react';

const Controls = ({ onStop, onResume, onReset, onSetTarget }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onStop}>Parar</button>
      <button onClick={onResume}>Resumir</button>
      <button onClick={onReset}>Reiniciar</button>
      <input 
        type="number" 
        placeholder="Alerta en..." 
        onChange={(e) => onSetTarget(e.target.value)} 
      />
    </div>
  );
};

export default Controls;