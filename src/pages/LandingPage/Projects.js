import React, { useEffect } from 'react';
import project1 from '../../assets/images/project-1.jpeg';
import project2 from '../../assets/images/project-2.jpeg';
import project3 from '../../assets/images/project-3.jpeg';
import project4 from '../../assets/images/project-4.jpeg';

import { Link } from 'react-router-dom'

import AOS from 'aos';
import "aos/dist/aos.css";

const Projects = () => {
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
    <section className="section projects">
      <div className="section-title" data-aos="flip-right">
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
        <Link to="/projects" className="project-1">
          <article className="project" data-aos="fade-right">
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
        </Link>
        <Link to="/projects" className="project-2">
          <article className="project" data-aos="fade-down">
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
        </Link>
        <Link to="/projects" className="project-3">
          <article className="project" data-aos="fade-up">
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
        </Link>
        <Link to="/projects" className="project-4">
          <article className="project" data-aos="fade-up">
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
        </Link>
      </div>
    </section>
  )
}

export default Projects;
