import React, { useEffect } from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";

const Skills = () => {
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
    <section className="section skills">
      <div className="section-title" data-aos="flip-right">
        <h2>skills</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center skills-center">
        <article data-aos="fade-right">
          <h3>front end</h3>
          <div className="skill">
            <p>HTML/CSS</p>
            <div className="skill-container">
              <div className="skill-value value-90"></div>
              <p className="skill-text">
                90%
                </p>
            </div>
          </div>
          <div className="skill">
            <p>Javascript</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                80%
                </p>
            </div>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="skill-container">
              <div className="skill-value value-85"></div>
              <p className="skill-text skill-text-85">
                85%
                </p>
            </div>
          </div>
          <div className="skill">
            <p>React Router</p>
            <div className="skill-container">
              <div className="skill-value value-85"></div>
              <p className="skill-text skill-text-85">
                85%
                </p>
            </div>
          </div>

          <div className="skill">
            <p>Redux</p>
            <div className="skill-container">
              <div className="skill-value value-85"></div>
              <p className="skill-text skill-text-85">
                85%
                </p>
            </div>
          </div>
          <div className="skill">
            <p>Styled-Components</p>
            <div className="skill-container">
              <div className="skill-value value-85"></div>
              <p className="skill-text skill-text-85">
                85%
                </p>
            </div>
          </div>
          <div className="skill">
            <p>React-Bootstrap</p>
            <div className="skill-container">
              <div className="skill-value value-85"></div>
              <p className="skill-text skill-text-85">
                85%
                </p>
            </div>
          </div>
        </article>
        <article data-aos="fade-left">
          <h3>back end</h3>
          <div className="skill">
            <p>Node</p>
            <div className="skill-container">
              <div className="skill-value value-85"></div>
              <p className="skill-text skill-text-85">
                85%
                </p>
            </div>
          </div>
          <div className="skill">
            <p>Express</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                80%
                </p>
            </div>
          </div>

          <div className="skill">
            <p>GraphQL</p>
            <div className="skill-container">
              <div className="skill-value"></div>
              <p className="skill-text">
                70%
                </p>
            </div>
          </div>

          <div className="skill">
            <p>Appolo</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                80%
                </p>
            </div>
          </div>

          <div className="skill">
            <p>MongoDB</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                80%
                </p>
            </div>
          </div>

          <div className="skill">
            <p>PostgreSQL</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                80%
                </p>
            </div>
          </div>

          <div className="skill">
            <p>MySql</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                80%
                </p>
            </div>
          </div>

        </article>
      </div>
    </section>
  )
}

export default Skills
