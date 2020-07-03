import React from 'react';
import project_1 from '../assets/images/project-1.jpeg';
import project_2 from '../assets/images/project-4.jpeg';
import project_3 from '../assets/images/project-3.jpeg';

const Projects = () => {
    return (
        <div>
     <header className="projects-hero">
      <div className="section-title">
        <h1>my projects</h1>
        <div className="underline"></div>
      </div>
    </header>
    <section className="section">
      <div className="section-center projects-page-center">
        <article className="single-project">
          <div className="project-container">
            <img src={project_1} alt="single project" />
            <a href="http://mudassarali.herokuapp.com/" className="project-icon" target = "_blank" rel="noopener noreferrer">
              <i className="fas fa-home"></i>
            </a>
          </div>
          <div className="project-details">
            <h4>project name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              eveniet amet odit aperiam, provident cum possimus sapiente minus
              quos! Ipsum?
            </p>
            <div className="project-footer">
              <span>
                <i className="fab fa-github"></i>
              </span>
              <a href="https://www.github.com" target = "_blank" rel="noopener noreferrer">source code</a>
            </div>
          </div>
        </article>

        <article className="single-project">
          <div className="project-container">
            <img src={project_2} alt="single project" />
            <a href="http://mudassarali.herokuapp.com/" className="project-icon" target = "_blank" rel="noopener noreferrer">
              <i className="fas fa-home"></i>
            </a>
          </div>
          <div className="project-details">
            <h4>project name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              eveniet amet odit aperiam, provident cum possimus sapiente minus
              quos! Ipsum?
            </p>
            <div className="project-footer">
              <span>
                <i className="fab fa-github"></i>
              </span>
              <a href="https://www.github.com" target = "_blank" rel="noopener noreferrer">source code</a>
            </div>
          </div>
        </article>

        <article className="single-project">
          <div className="project-container">
            <img src={project_3} alt="single project" />
            <a href="http://mudassarali.herokuapp.com/" className="project-icon" target = "_blank" rel="noopener noreferrer">
              <i className="fas fa-home"></i>
            </a>
          </div>
          <div className="project-details">
            <h4>project name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              eveniet amet odit aperiam, provident cum possimus sapiente minus
              quos! Ipsum?
            </p>
            <div className="project-footer">
              <span>
                <i className="fab fa-github"></i>
              </span>
              <a href="https://www.github.com" target = "_blank" rel="noopener noreferrer">source code</a>
            </div>
          </div>
        </article>
      </div>
    </section>
        </div>
    )
}

export default Projects
