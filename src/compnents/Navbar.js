import React from 'react';
import logo from '../assets/images/logo.svg';
import {Link} from 'react-router-dom'

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
          <h2><span style = {{textDecoration: "underline"}}>Mudas</span><span style = {{color: "#E9B949", textDecoration: "underline"}}>Sir</span> <br />
          {/* <span style = {{fontSize: "medium", position: "absolute"}}>Developer</span> */}
          </h2>
          {/* <img src={logo} className="nav-logo" alt="nav logo" /> */}
          <button className="nav-btn" id="nav-btn" onClick = {() => showSidebar()}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    <aside className="sidebar" id="sidebar">
      <div>
        <button className="close-btn" id="close-btn" onClick = {() => hideSidebar()}>
          <i className="fas fa-times"></i>
        </button>
        <ul className="sidebar-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
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
