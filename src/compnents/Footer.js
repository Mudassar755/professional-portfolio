import React, { useEffect } from 'react';
import AOS from 'aos'

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <footer className="footer"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/mudassarali86/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook" data-aos="flip-right"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mudassar-ali-59225b190/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin" data-aos="flip-right"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Mudassar755" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github" data-aos="flip-right"></i>
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/11862876/mudassar-ali" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-stack-overflow" data-aos="flip-right"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram" data-aos="flip-right"></i>
          </a>
        </li>
      </ul>

      <p>&copy; <span id="date"></span> mudassar_Ali. all rights reserved</p>
    </footer>
  )
}

export default Footer
