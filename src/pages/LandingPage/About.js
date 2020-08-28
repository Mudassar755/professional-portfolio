import React, { useEffect } from 'react';
import aboutImg from '../../assets/images/about-img.jpeg';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {
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
    <section className="section about">
      <div className="section-center about-center">
        <article className="about-img" data-aos="flip-left">
          <img
            src={aboutImg}
            className="hero-photo"
            alt="about img"

          />
        </article>
        <article className="about-info" data-aos="fade-left">
          <div className="section-title about-title">
            <h2>about</h2>
            <div className="underline"></div>
          </div>
          <p>
            I am Mudassar Ali a professional Developer. I did BS Software Engineering from
            a Pakistan`s Well known University in 2018. I started my professional career as
            Web Developer in 2018.
            </p>
          <p>
            In my professional career I have worked on many complex projects in differnt roles as Front-End Developer in ReactJs, Redux-Thunk,
            Styled-Components and many other libraries.
            Backend Developer in Node.Js, mongoDB, GrapgQL, Appolo Server/Client, PostgreSQL, MySql, Docker
            </p>
          {/* <Link to="/about" className="btn">about me</Link> */}
        </article>
      </div>
    </section>
  )
}

export default About;
