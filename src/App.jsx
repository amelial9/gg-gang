import React from 'react'
import gggangImage from '../img/gggang.jpg'
import membersData from './data/members.json'
import timelineData from './data/timeline.json'

// Dynamically import all images from the root img/members folder
const imageModules = import.meta.glob('../img/members/*.{jpg,jpeg,png}', { eager: true })
const memberImages = {}
Object.keys(imageModules).forEach(path => {
  const fileName = path.split('/').pop()
  // Handle both default export and direct module export
  memberImages[fileName] = imageModules[path].default ?? imageModules[path]
})

// Dynamically import all images from the root img/album folder
const albumModules = import.meta.glob('../img/album/*.{jpg,jpeg,png}', { eager: true })
const albumImages = []
Object.keys(albumModules).forEach(path => {
  const imageSrc = albumModules[path].default ?? albumModules[path]
  albumImages.push(imageSrc)
})

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

        <section className="timeline-section">
          <h2 className="timeline-heading">Timeline</h2>
          <div className="timeline-container">
            {timelineData.events.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-date">{event.date}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="album-section">
          <h2 className="album-heading">Album</h2>
          <div className="album-container">
            <div className="album-scroll">
              {albumImages.length > 0 ? (
                albumImages.map((imageSrc, index) => (
                  <div key={index} className="album-item">
                    <img 
                      className="album-image" 
                      src={imageSrc} 
                      alt={`Album photo ${index + 1}`}
                    />
                  </div>
                ))
              ) : (
                <p className="album-empty">No photos yet. Add images to img/album/</p>
              )}
            </div>
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

