import { useState } from 'react'
import './App.css'

function App() {
  const handleCardMouseEnter = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;
    
    // Determina direzione in base a dove entra il mouse
    if (x > centerX) {
      // Entra da destra: shimmer da destra a sinistra
      card.style.setProperty('--shimmer-angle', '-45deg');
      card.style.setProperty('--shimmer-start', '100%');
      card.style.setProperty('--shimmer-end', '-100%');
    } else {
      // Entra da sinistra: shimmer da sinistra a destra
      card.style.setProperty('--shimmer-angle', '45deg');
      card.style.setProperty('--shimmer-start', '-100%');
      card.style.setProperty('--shimmer-end', '100%');
    }
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    // Reset per prossimo ingresso
    card.style.removeProperty('--shimmer-angle');
    card.style.removeProperty('--shimmer-start');
    card.style.removeProperty('--shimmer-end');
  };

  return (
    <div className="app">
      <div className="hero-section">
        <div className="hero-left">
          <div className="profile-image-container">
            <img src="/profile-pic-small.jpg" alt="Tommaso Stocchi" className="profile-image" />
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-content">
            <h1>Tommaso Stocchi</h1>
            <p className="tagline">Cloud Architect | Author | Tech Enthusiast</p>
            <p className="bio">
              Welcome! I'm a cloud architect passionate about all things cloud native, intelligent apps and sharing knowledge with the community.
            </p>

            <section className="links-section">
            <div 
              className="card"
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <h2>📝 Blog</h2>
              <p>Read my latest articles and thoughts.</p>
              <a 
                href="https://dev.to/tommasodotnet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                Visit Blog
              </a>
            </div>

            <div 
              className="card"
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <h2>📚 Books</h2>
              <p>Check out my published books and writing projects.</p>
              <a 
                href="https://www.amazon.it/-/en/Introduction-NET-Aspire-Cloud-native-microservices/dp/9365893542/ref=sr_1_1?crid=3JTU03SB54VRN&dib=eyJ2IjoiMSJ9.cTgxZ1FPoRdQww4JJowbkA-CEWeKBwd8mbWoxJQiKwY.ALHYM4edAtfQ7Px8oxB10K6_ehiYQwBmk6tBhrcqIIM&dib_tag=se&keywords=tommaso+stocchi+.net+aspire&qid=1762866232&sprefix=tommaso+stocchi+.net+aspir%2Caps%2C134&sr=8-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                View Books
              </a>
            </div>

            <div 
              className="card"
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <h2>🎥 Conferences</h2>
              <p>Watch my conference talks and presentations.</p>
              <a 
                href="https://www.youtube.com/playlist?list=PLM6abhhRsQMftz6qMejjE21BcpywZ-vTE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                Watch Videos
              </a>
            </div>
          </section>

          <section className="social">
            <h2>Let's connect</h2>
            <div className="social-links">
              <a href="https://bsky.tommasostocchi.dev" target="_blank" rel="noopener noreferrer">Bluesky</a>
              <a href="https://linkedin.tommasostocchi.dev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/tommasodotnet" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </section>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tommaso Stocchi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
