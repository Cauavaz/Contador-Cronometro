import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const ehPar = likes % 2 === 0;
  function darOLike() {
    console.log(likes)
    setLikes(likes + 1)
  }

  return (
    <div className={`counter-container ${isDarkMode ? 'dark' : 'light'}`}>
      <spline-viewer 
        url="https://prod.spline.design/g7t8wrnBtg58Zk7F/scene.splinecode"
        className="spline-3d-background"
      ></spline-viewer>
      
      <div className="theme-switcher">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={(e) => setIsDarkMode(e.target.checked)}
          />
          <div className="swap-on">🌙</div>
          <div className="swap-off">☀️</div>
        </label>
      </div>
      
      <div className="counter-card">
        <div className="heart-icon">❤️</div>
        <div className="counter-display">
          <span className="counter-number" style={{color:ehPar ? "green" : "#7700ff" }}>{likes}</span>
          <span className="counter-label">likes</span>
        </div>
        <button onClick={darOLike} className="like-button">
          Dar Like
        </button>
      </div>
    </div>
  )
}

export default App
