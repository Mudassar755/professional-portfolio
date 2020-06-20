import React from 'react';
import project1 from '../../assets/images/project-1.jpeg';
import project2 from '../../assets/images/project-2.jpeg';
import project3 from '../../assets/images/project-3.jpeg';
import project4 from '../../assets/images/project-4.jpeg';

const Projects = () => {
    return (
        <section className="section projects">
      <div className="section-title">
        <h2>latest works</h2>
        <div className="underline"></div>
        <p className="projects-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
          magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
          dignissimos aliquid blanditiis architecto voluptates delectus
          voluptate animi nulla! Autem explicabo perspiciatis officia ea.
        </p>
      </div>
      <div className="section-center projects-center">
        <a href="projects.html" className="project-1">
          <article className="project">
            <img
              src={project1}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
        <a href="projects.html" className="project-2">
          <article className="project">
            <img
              src={project2}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
        <a href="projects.html" className="project-3">
          <article className="project">
            <img
              src={project3}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
        <a href="projects.html" className="project-4">
          <article className="project">
            <img
              src={project4}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
      </div>
    </section>
    )
}

export default Projects;
