import { useRef } from 'react';
import VariableProximity from '../VariableProximity/VariableProximity';
import './Hero.css';

function Hero({ onSelectContador, onSelectCronometro }) {
  const containerRef = useRef(null);

  return (
    <div className="content">
      <div 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" 
        data-aos-duration="1500" 
        className="tag-box"
      >
        <div className="tag">CHRONOS <i className="fas fa-robot"></i></div>
      </div>  
      
      <h1 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" 
        data-aos-duration="2000"
      >
        <div ref={containerRef} style={{position: 'relative'}}>
          <VariableProximity
            label={'Contador ou Cronômetro? Escolha seu timer!'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 100, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />
        </div>
      </h1>

      <div 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" 
        data-aos-duration="3000" 
        className="buttons"
      >
        <a href="#" className="btn-get-started" onClick={onSelectContador}>
          <i className="fas fa-sort-numeric-up"></i> Contador
        </a>
        <a href="#" className="btn-signing-main" onClick={onSelectCronometro}>
          <i className="fas fa-clock"></i> Cronômetro
        </a>
      </div>
    </div>
  );
}

export default Hero;
