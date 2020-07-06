import React from 'react';
import aboutImg from '../../assets/images/about-img.jpeg';
import {Link} from 'react-router-dom';

 const About = () => {
    return (
        <section className="section about">
        <div className="section-center about-center">
          <article className="about-img">
            <img
              src={aboutImg}
              className="hero-photo"
              alt="about img"
            />
          </article>
          <article className="about-info">
            <div className="section-title about-title">
              <h2>about</h2>
              <div className="underline"></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
              eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
              reiciendis possimus rerum omnis recusandae molestias error
              consequuntur, doloribus inventore reprehenderit officiis. Dolore
              aut, repellendus eius fugiat numquam cumque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
              eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
              reiciendis possimus rerum omnis recusandae molestias error
              consequuntur, doloribus inventore reprehenderit officiis. Dolore
              aut, repellendus eius fugiat numquam cumque.
            </p>
            <Link to="/about" className="btn">about me</Link>
          </article>
        </div>
      </section>
    )
}

export default About;
