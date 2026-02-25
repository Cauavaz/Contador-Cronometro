import { useState } from 'react'
import { useRef } from 'react';
import VariableProximity from './VariableProximity';

function App() {
  const containerRef = useRef(null);
  const [mostrar,setMostrar] = useState(1);
  const [contador, setContador] = useState(0);
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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };


  return (
    <div className="container">
      <img src="./src/img/gradient.png" className="image-gradient" alt="gradient" />
      <div className="layer-blur"></div>
      
      <header>
        <h1 data-aos="fade-down" data-aos-duration="1500" className="logo">
          
          <div
            ref={containerRef}
            style={{position: 'relative'}}
            >
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
        {/* <nav>
          <a data-aos="fade-down" data-aos-duration="1500" href="#">Home</a>
          <a data-aos="fade-down" data-aos-duration="2000" href="#">About</a>
          <a data-aos="fade-down" data-aos-duration="2500" href="#">Contact</a>
          <a data-aos="fade-down" data-aos-duration="3000" href="#">Blog</a>
        </nav> */}
        <a href="https://github.com/Cauavaz" data-aos="fade-down"  data-aos-duration="1500" className="btn-signing"> Cauã Vaz <i class="fab fa-github"></i></a>
      </header>

      <main>
        {mostrar === 1 && (
        <div className="content">
          <div data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="300"
               data-aos-offset="0" 
               data-aos-duration="1500" 
               className="tag-box">
            <div className="tag">CHRONOS <i class="fas fa-robot"></i></div>
          </div>  
          
          <h1 data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0" 
              data-aos-duration="2000">
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

          <div data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="300"
               data-aos-offset="0" 
               data-aos-duration="3000" 
               className="buttons">
            <a href="#" className="btn-get-started" onClick={() => setMostrar(2)}><i class="fas fa-sort-numeric-up"></i> Contador</a>
            <a href="#" className="btn-signing-main" onClick={() => setMostrar(3)}><i class="fas fa-clock"></i> Cronômetro</a>
          </div>
        </div>
        )}
        
        {mostrar === 2 && (
          <div className="content-visible">
            <div className="contador-wrapper" data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="300"
               data-aos-offset="0" 
               data-aos-duration="600" >
              
              <div className="contador-header">
                <h3 className="contador-title">Contador</h3>
                <button className="btn-close" onClick={() => setMostrar(1)}>×</button>
              </div>

                <div className="contador-box">
                  <button className="btn-contador"onClick={() => setContador(contador + 1)} >+</button>
                  <span className={`numero ${contador % 2 === 0 ? 'par' : 'impar'}`}>{contador}</span>
                  <button className="btn-contador" onClick={() => setContador(contador - 1)}>-</button>
                </div>

                <button className="btn-reset" onClick={() => setContador(0)}>Resetar</button>
              </div>
          </div>
        )}
        
        {mostrar === 3 && (
          <div className="content-visible">
            <div className="contador-wrapper" data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="300"
               data-aos-offset="0" 
               data-aos-duration="600" >
              
              <div className="contador-header">
                <h3 className="contador-title">Cronômetro</h3>
                <button className="btn-close" onClick={() => setMostrar(1)}>×</button>
              </div>

                <div className="cronometro-box">
                  <button className="btn-cronometro" onClick={isRunning ? pauseCronometro : startCronometro}>
                    {isRunning ? '⏸' : '▶'}
                  </button>
                  <span className="numero cronometro-time">{formatTime(cronometro)}</span>
                </div>

                <button className="btn-reset" onClick={resetCronometro}>Resetar</button>
              </div>
          </div>
        )}
        
      </main>
     
      
      <spline-viewer data-aos="fade-zoom-in"
                     data-aos-easing="ease-in-back"
                     data-aos-delay="300"
                     data-aos-offset="0" 
                     data-aos-duration="3000"  
                     className="robot-3d" 
                     url="https://prod.spline.design/Wa3a2rQYFgusLcQK/scene.splinecode">
      </spline-viewer>

    </div>
  )
}

export default App
