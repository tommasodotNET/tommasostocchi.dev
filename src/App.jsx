import { useState } from 'react'
import './App.css'

function App() {
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
            <div className="card">
              <h2>📝 Blog</h2>
              <p>Read my latest articles and thoughts on software development.</p>
              <a 
                href="https://dev.to/tommasodotnet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                Visit Blog
              </a>
            </div>

            <div className="card">
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

            <div className="card">
              <h2>💼 Projects</h2>
              <p>Explore my open source projects and contributions.</p>
              <a 
                href="https://github.com/tommasodotnet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub Profile
              </a>
            </div>
          </section>

          <section className="social">
            <h2>Connect</h2>
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
