import { useRef } from 'react';
import VariableProximity from '../VariableProximity/VariableProximity';
import './Header.css';

function Header() {
  const containerRef = useRef(null);

  return (
    <header>
      <h1 data-aos="fade-down" data-aos-duration="1500" className="logo">
        <div ref={containerRef} style={{position: 'relative'}}>
          <VariableProximity
            label={'CHRONOS'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 50, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={50}
            falloff='linear'
          />
        </div>  
      </h1>
      <a 
        href="https://github.com/Cauavaz" 
        data-aos="fade-down"  
        data-aos-duration="1500" 
        className="btn-signing"
      >
        Cauã Vaz <i className="fab fa-github"></i>
      </a>
    </header>
  );
}

export default Header;
