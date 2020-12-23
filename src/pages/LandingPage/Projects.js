import React, { useEffect } from 'react';
// import project1 from '../../assets/images/project-1.jpeg';
// import project2 from '../../assets/images/project-2.jpeg';
// import project3 from '../../assets/images/project-3.jpeg';
// import project4 from '../../assets/images/project-4.jpeg';
// import proj1 from '../../assets/images/proj-1.1.png';
// import proj2 from '../../assets/images/proj-1.2.png';
// import proj3 from '../../assets/images/proj-1.3.png';
import proj4 from '../../assets/images/proj-2.1.png';
// import proj5 from '../../assets/images/proj-2.2.png';
import proj6 from '../../assets/images/proj-3.1.png';
// import proj7 from '../../assets/images/proj-3.2.png';
// import proj8 from '../../assets/images/proj-4.1.png';
// import proj9 from '../../assets/images/proj-4.2.png';
// import proj10 from '../../assets/images/proj-5.1.png';
// import proj11 from '../../assets/images/proj-6.1.png';
import logoMaker from '../../assets/images/logo-maker.png';
import designStudio from '../../assets/images/design-studio.png';

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
          Latest Work I have done on Different projects with different IT Companies.
        </p>
      </div>
      <div className="section-center projects-center">
        <Link to="/projects" className="project-1">
          <article className="project" data-aos="fade-right">
            <img
              src={proj6}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>Invictus Store</h4>
              <p>Invictus</p>
            </div>
          </article>
        </Link>
        <Link to="/projects" className="project-2">
          <article className="project" data-aos="fade-down">
            <img
              src={logoMaker}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>Logo Maker</h4>
              <p>ContentArcade</p>
            </div>
          </article>
        </Link>
        <Link to="/projects" className="project-3">
          <article className="project" data-aos="fade-up">
            <img
              src={proj4}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>Helse Design Panel</h4>
              <p>Helse Design</p>
            </div>
          </article>
        </Link>
        <Link to="/projects" className="project-4">
          <article className="project" data-aos="fade-up">
            <img
              src={designStudio}
              alt="single project"
              className="project-img"
            />
            <div className="project-info">
              <h4>Design Studio</h4>
              <p>ContentArcade</p>
            </div>
          </article>
        </Link>
      </div>
    </section>
  )
}

export default Projects;
