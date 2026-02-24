import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)

  function darOLike() {
    console.log(likes)
    setLikes(likes + 1)
  }

  return (
    <div className="counter-container">
      <div className="counter-card">
        <div className="heart-icon">❤️</div>
        <div className="counter-display">
          <span className="counter-number">{likes}</span>
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
