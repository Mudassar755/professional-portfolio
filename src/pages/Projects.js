import React, { useEffect } from 'react';
// import project_1 from '../assets/images/project-1.jpeg';
// import project_2 from '../assets/images/project-4.jpeg';
// import project_3 from '../assets/images/project-3.jpeg';
// import proj1 from '../assets/images/proj-1.1.png';
// import proj2 from '../assets/images/proj-1.2.png';
// import proj3 from '../assets/images/proj-1.3.png';
import proj4 from '../assets/images/proj-2.1.png';
// import proj5 from '../assets/images/proj-2.2.png';
import proj6 from '../assets/images/proj-3.1.png';
// import proj7 from '../assets/images/proj-3.2.png';
import proj8 from '../assets/images/proj-4.1.png';
// import proj9 from '../assets/images/proj-4.2.png';
import proj10 from '../assets/images/proj-5.1.png';
import proj11 from '../assets/images/proj-6.1.png';
import proj12 from '../assets/images/proj-7.1.png';
import proj13 from '../assets/images/proj-8.1.png';
import designStudio from '../assets/images/design-studio.png';
import logoMaker from '../assets/images/logo-maker.png';

import AOS from 'aos';


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
    <div>
      <header className="projects-hero">
        <div className="section-title" data-aos="flip-right">
          <h1>my projects</h1>
          <div className="underline"></div>
        </div>
      </header>
      <section className="section">
        <div className="section-center projects-page-center">
          <article className="single-project" data-aos="fade-right">
            <div className="project-container">
              <img src={designStudio} alt="single project" />
              <a href="https://designstudio.smallseotools.com" className="project-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>Design Studio</h4>
              <p>
                In Design Studio Users can create Online Resume , Different Logos, Flyers for free.
                Techs used in this project React.Js, Next.Js, React-Roter, Redux-Thunk, React-Bootstrap, Node.Js, Express.Js, AWS
            </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">source code</a>
              </div>
            </div>
          </article>

          <article className="single-project" data-aos="fade-down">
            <div className="project-container">
              <img src={logoMaker} alt="single project" />
              <a href="https://www.logomaker.net/" className="project-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>Logo Maker</h4>
              <p>
                In Logo Maker users can create different types of logos for free.
                This project Built with React.Js, Next.Js, React-Roter, Redux-Thunk, React-Bootstrap, Node.Js, MongoDB, Express.Js, AWS.
            </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">source code</a>
              </div>
            </div>
          </article>
          <article className="single-project" data-aos="fade-down">
            <div className="project-container">
              <img src={proj4} alt="single project" />
              <a href="https://www.helsedesign.no/" className="project-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>Helse Design Panel</h4>
              <p>
                Panel of Helse Design Mobile App named "AppnGo" used in Norway to manage Resturent.
                Built with React.Js, Ant Design, Redux-Saga, Webpack, GraphQL, Appolo Server/Client, PostgreSQL, Docker.
            </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">source code</a>
              </div>
            </div>
          </article>

          <article className="single-project" data-aos="fade-left">
            <div className="project-container">
              <img src={proj6} alt="single project" />
              <a href="https://invictus-store.herokuapp.com/" className="project-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>invictus store</h4>
              <p>
                Complete eCommerece Store with complete Admin Panel. Built in React.Js,React-Router,
                Redux-Thunk, Material-UI, Node.Js, MongoDB, Express.Js, Heroku
            </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">source code</a>
              </div>
            </div>
          </article>
          <article className="single-project" data-aos="fade-left">
            <div className="project-container">
              <img src={proj8} alt="single project" />
              <a href="http://mudasar-shoe-store.surge.sh/" className="project-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>Shoe Store</h4>
              <p>
                Front-End of Shoe Store in React.Js,React-Router-6, Context API, React-Hooks, Material-UI
            </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">source code</a>
              </div>
            </div>
          </article>
          <article className="single-project" data-aos="fade-left">
            <div className="project-container">
              <img src={proj10} alt="single project" />
              <a href="http://covid19-info.surge.sh/" className="project-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>Covid-19 Tracker</h4>
              <p>
                A Covid-19 Tracker App built in React.Js, React-Charts, Material-UI
            </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">source code</a>
              </div>
            </div>
          </article>
          <article className="single-project" data-aos="fade-left">
            <div className="project-container">
              <img src={proj11} alt="single project" />
              <a href="https://invictus-store.herokuapp.com/" className="project-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>Dev Connector</h4>
              <p>
                A Simple Soical network App. User Can Register/Login and can
                create Profile, comment on other`s profile, like/dislike comments.
                Built in React.Js, Node.Js, MongoDB,ExpressJs.
            </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">source code</a>
              </div>
            </div>
          </article>
          <article className="single-project" data-aos="fade-left">
            <div className="project-container">
              <img src={proj12} alt="single project" />
              <a href="http://landingpage-web-animation.surge.sh/" className="project-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>CORTEX</h4>
              <p>
                Clone of <a href="https://www.cortexcopywriter.com/" target="_blank" rel="noopener noreferrer"><strong>CortexCopywriter</strong></a>{' '}
                with ReactJs, Web Animation API, Matrial-UI
              </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">source code</a>
              </div>
            </div>
          </article>
          <article className="single-project" data-aos="fade-left">
            <div className="project-container">
              <img src={proj13} alt="single project" />
              <a href="http://bootcamp_expense_tracking.surge.sh/" className="project-icon" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-details">
              <h4>Expense Tracker</h4>
              <p>
                A Simple Expene Tracking App in ReactJs, Context-API
            </p>
              <div className="project-footer">
                <span>
                  <i className="fab fa-github"></i>
                </span>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">source code</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Projects
