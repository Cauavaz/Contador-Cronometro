import { useState } from 'react';
import './Contador.css';

function Contador({ onClose }) {
  const [contador, setContador] = useState(0);

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
          <h3 className="contador-title">Contador</h3>
          <button className="btn-close" onClick={onClose}>×</button>
        </div>

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

        <button className="btn-reset" onClick={() => setContador(0)}>
          Resetar
        </button>
      </div>
    </div>
  );
}

export default Contador;
