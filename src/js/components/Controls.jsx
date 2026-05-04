import React from 'react';

const Controls = ({ onStop, onResume, onReset, onSetAlert, onSetCountdownStart, onStartCountdown }) => {
  return (
    <div className="container text-center mt-4">
      <div className="btn-group mb-4">
        <button className="btn btn-outline-danger" onClick={onStop}>Parar</button>
        <button className="btn btn-outline-success" onClick={onResume}>Resumir</button>
        <button className="btn btn-outline-secondary" onClick={onReset}>Reiniciar</button>
      </div>

      <div className="row justify-content-center">
        {/* Input para Punto de Partida */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Iniciar cuenta atrás en:</label>
          <div className="input-group">
            <input 
              type="number" 
              className="form-control"
              placeholder="Segundos..." 
              onChange={(e) => onSetCountdownStart(e.target.value)} 
            />
            <button className="btn btn-primary" onClick={onStartCountdown}>Ir</button>
          </div>
        </div>

        {/* Input para la Alerta */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Lanzar alerta en:</label>
          <input 
            type="number" 
            className="form-control"
            placeholder="Ej: 10" 
            onChange={(e) => onSetAlert(e.target.value)} 
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;