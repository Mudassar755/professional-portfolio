import React from 'react';
// import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const showSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.add("show-sidebar");
  }

  const hideSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.remove("show-sidebar");
  }
  return (
    <div>
      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <h2>
              <NavLink to="/">
                <span style={{ textDecoration: "underline", color: "hsl(209, 61%, 16%)" }}>Mudas</span>
                <span style={{ color: "#E9B949", textDecoration: "underline" }}>Sir</span></NavLink> <br />
            </h2>
            {/* <img src={logo} className="nav-logo" alt="nav logo" /> */}
            <button className="nav-btn" id="nav-btn" onClick={() => showSidebar()}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/about">about</NavLink>
            </li> */}
            <li>
              <NavLink to="/projects">projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <aside className="sidebar" id="sidebar">
        <div>
          <button className="close-btn" id="close-btn" onClick={() => hideSidebar()}>
            <i className="fas fa-times"></i>
          </button>
          <ul className="sidebar-links">
            <li>
              <NavLink to="/" onClick={() => hideSidebar()}>home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/about" onClick={() => hideSidebar()}>about</NavLink>
            </li> */}
            <li>
              <NavLink to="/projects" onClick={() => hideSidebar()}>projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => hideSidebar()}>contact</NavLink>
            </li>
          </ul>
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
        </div>
      </aside>
    </div>
  )
}

export default Navbar;
