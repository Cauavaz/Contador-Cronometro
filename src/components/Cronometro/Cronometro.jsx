import { useState } from 'react';
import { formatTime } from '../../utils/timeFormatter';
import './Cronometro.css';

function Cronometro({ onClose }) {
  const [cronometro, setCronometro] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

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

  return (
    <div className="content-visible">
      <div 
        className="contador-wrapper" 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" 
        data-aos-duration="600"
      >
        <div className="contador-header">
          <h3 className="contador-title">Cronômetro</h3>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>

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

        <button className="btn-reset" onClick={resetCronometro}>
          Resetar
        </button>
      </div>
    </div>
  );
}

export default Cronometro;
