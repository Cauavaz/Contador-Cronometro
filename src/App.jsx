import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Contador from './components/Contador/Contador';
import Cronometro from './components/Cronometro/Cronometro';
import TargetCursor from './TargetCursor';
import gradientImage from './assets/images/gradient.png';

function App() {
  const [mostrar, setMostrar] = useState(1);

  return (
    <div className="container">
      <TargetCursor 
        targetSelector=".cursor-target, .btn-get-started, .btn-signing-main, .btn-contador, .btn-cronometro, .btn-reset, .btn-close, .btn-signing"
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <img src={gradientImage} className="image-gradient" alt="gradient" />
      <div className="layer-blur"></div>
      
      <Header />

      <main>
        {mostrar === 1 && (
          <Hero 
            onSelectContador={() => setMostrar(2)}
            onSelectCronometro={() => setMostrar(3)}
          />
        )}
        
        {mostrar === 2 && (
          <Contador onClose={() => setMostrar(1)} />
        )}
        
        {mostrar === 3 && (
          <Cronometro onClose={() => setMostrar(1)} />
        )}
      </main>
     
      <spline-viewer 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" 
        data-aos-duration="3000"  
        className="robot-3d" 
        url="https://prod.spline.design/Wa3a2rQYFgusLcQK/scene.splinecode">
      </spline-viewer>
    </div>
  );
}

export default App;
