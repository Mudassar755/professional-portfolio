import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/mudassarali86/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mudassar-ali-59225b190/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Mudassar755" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a  href="https://stackoverflow.com/users/11862876/mudassar-ali" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-stack-overflow"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
  
        <p>&copy; <span id="date"></span> mudassar ali. all rights reserved</p>
      </footer>
    )
}

export default Footer
