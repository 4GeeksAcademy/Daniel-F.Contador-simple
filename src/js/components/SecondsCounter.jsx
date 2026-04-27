import React from 'react';

const SecondsCounter = ({ seconds }) => {
  // Convertimos el número en un string de 6 dígitos con ceros a la izquierda
  const digits = seconds.toString().padStart(6, '0').split('');

  const counterStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#101010',
    color: 'white',
    fontSize: '5rem',
    padding: '20px',
    gap: '10px'
  };

  const digitStyle = {
    backgroundColor: '#202020',
    padding: '10px 20px',
    borderRadius: '5px'
  };

  return (
    <div style={counterStyle}>
      <div style={digitStyle}><i className="far fa-clock"></i></div>
      {digits.map((digit, index) => (
        <div key={index} style={digitStyle}>{digit}</div>
      ))}
    </div>
  );
};

export default SecondsCounter;