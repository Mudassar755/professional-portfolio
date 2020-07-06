import React from 'react';

import hero_small from '../../assets/images/mudasar2-small.png';
import project_1 from '../../assets/images/project-1.jpeg';
import project_2 from '../../assets/images/project-2.jpeg';
import project_3 from '../../assets/images/project-3.jpeg';
import project_4 from '../../assets/images/project-4.jpeg';


const Blogs = () => {
    return (
        <section className="section blog">
        <div className="section-title">
          <h2>blog</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center blog-center">
          <div className="card">
            <div className="card-side card-front">
              <img src={project_1} alt="project-1" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                  nisi ut a est eum tempora dolorum temporibus voluptatibus!
                  Natus, provident.
                </p>
                <div className="card-footer">
                  <img src={hero_small} alt="author" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-side card-front">
              <img src={project_2} alt="project-2" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                  nisi ut a est eum tempora dolorum temporibus voluptatibus!
                  Natus, provident.
                </p>
                <div className="card-footer">
                  <img src={hero_small} alt="author" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-side card-front">
              <img src={project_3} alt="project-3" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                  nisi ut a est eum tempora dolorum temporibus voluptatibus!
                  Natus, provident.
                </p>
                <div className="card-footer">
                  <img src={hero_small} alt="author" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-side card-front">
              <img src={project_4} alt="project-4" />
              <div className="card-info">
                <h4>article title</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                  nisi ut a est eum tempora dolorum temporibus voluptatibus!
                  Natus, provident.
                </p>
                <div className="card-footer">
                  <img src={hero_small} alt="author" />
                  <p>7 min read</p>
                </div>
              </div>
            </div>
            <div className="card-side card-back">
              <button className="btn">read more</button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Blogs
