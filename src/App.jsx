import React from 'react'
import gggangImage from '../img/gggang.jpg'
import membersData from './data/members.json'
import oliviaImage from './img/olivia.jpg'
import kemingImage from './img/qkm.jpg'
import ameliaImage from './img/amelia.jpg'

const memberImages = {
  'olivia.jpg': oliviaImage,
  'qkm.jpg': kemingImage,
  'amelia.jpg': ameliaImage
}

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

        <section className="members-section">
          <h2 className="members-heading">Members</h2>
          <div className="members-list">
            {membersData.members.map((member, index) => (
              <div key={member.name} className="member-card" style={{animationDelay: `${0.3 + index * 0.2}s`}}>
                <div className="member-image-wrapper">
                  <img 
                    className="member-image" 
                    src={memberImages[member.image]} 
                    alt={member.name}
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-roles">
                    {member.roles.map((role, roleIndex) => (
                      <span key={roleIndex} className="member-role">{role}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 GG Gang</p>
      </footer>
    </>
  )
}

export default App

