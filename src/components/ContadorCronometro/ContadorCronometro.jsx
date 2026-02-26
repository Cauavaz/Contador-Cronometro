import { useState, useEffect } from 'react';
import { formatTime } from '../../utils/timeFormatter';

function ContadorCronometro({ onClose, initialMode = 'contador' }) {
  const [mode, setMode] = useState(initialMode); // 'contador' ou 'cronometro'
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Estados do Contador
  const [contador, setContador] = useState(0);
  
  // Estados do Cronômetro
  const [cronometro, setCronometro] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleTransform = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setMode(mode === 'contador' ? 'cronometro' : 'contador');
    }, 150);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Funções do Cronômetro
  const startCronometro = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setCronometro(prev => prev + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const pauseCronometro = () => {
    if (isRunning && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    }
  };

  const resetCronometro = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setCronometro(0);
    setIsRunning(false);
  };

  // Cleanup do intervalo ao desmontar
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="content-visible">
      <div 
        className={`contador-wrapper ${isTransitioning ? 'transitioning' : ''}`}
      >
        <div className="contador-header">
          <h3 className="contador-title">
            {mode === 'contador' ? 'Contador' : 'Cronômetro'}
          </h3>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>

        {mode === 'contador' ? (
          // Modo Contador
          <div className="contador-box">
            <button 
              className="btn-contador"
              onClick={() => setContador(contador + 1)}
            >
              +
            </button>
            <span className={`numero ${contador % 2 === 0 ? 'par' : 'impar'}`}>
              {contador}
            </span>
            <button 
              className="btn-contador" 
              onClick={() => setContador(contador - 1)}
            >
              -
            </button>
          </div>
        ) : (
          // Modo Cronômetro
          <div className="cronometro-box">
            <button 
              className="btn-cronometro" 
              onClick={isRunning ? pauseCronometro : startCronometro}
            >
              {isRunning ? '⏸' : '▶'}
            </button>
            <span className="numero cronometro-time">
              {formatTime(cronometro)}
            </span>
          </div>
        )}

        <div className="buttons-container">
          <button 
            className="btn-reset" 
            onClick={mode === 'contador' ? () => setContador(0) : resetCronometro}
          >
            Resetar
          </button>
          <button className="btn-transform" onClick={handleTransform}>
            Transformar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContadorCronometro;
