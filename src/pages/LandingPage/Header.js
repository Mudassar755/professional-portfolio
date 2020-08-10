import React, { useEffect } from 'react';
import heroImg from '../../assets/images/mudasar2.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, [])
  return (
    <>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info" data-aos="fade-right">
            <div className="underline"></div>
            <h1>i'm mudassir</h1>
            <h4>web & mobile App Developer (MERN Stack)</h4>
            <Link to="/" className="btn hero-btn">hire me</Link>
            <ul className="social-icons hero-icons">
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
                <a href="https://stackoverflow.com/users/11862876/mudassar-ali" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-stack-overflow"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </article>
          <article className="hero-img" data-aos="fade-left">
            <img src={heroImg} className="hero-photo" alt="john doe" />
          </article>
        </div>
      </header>
    </>
  )
}


export default Header;