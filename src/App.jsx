import React from 'react'
import gggangImage from '../img/gggang.jpg'

function App() {
  return (
    <>
      <main>
        <h1 className="hp-heading">GG Gang</h1>

        <div className="hp-content">
          <div>
            <img className="hp-image" style={{height: '350px', width: 'auto'}} src={gggangImage} alt="GG Gang" />
          </div>
          <div className="hp-text">
            <p>This is GG Gang.</p>
            <p>A crazy friend group in Seattle.</p>
            <p>Cat mom, dog mom, green bean lovers, loopy enthuaists, capybara admirers.</p>
            <p>More to come</p>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2025 GG Gang</p>
      </footer>
    </>
  )
}

export default App

