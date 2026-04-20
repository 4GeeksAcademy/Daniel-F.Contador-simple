import React, { useState } from 'react';

function Contador() {
  // Inicializamos el estado en 0 [1, 3]
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador - 1)}>Restar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}

export default Contador;