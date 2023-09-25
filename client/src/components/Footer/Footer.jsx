import React from 'react'
import './Footer.scss'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="upper-footer">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="menu">
              <ul>
                  <li>About</li>
                  <li>What We Do</li>
                  <li>Contact Us</li>

              </ul>
            </div>
        </div>
        <div className="lower-footer">
            <p>© 2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer