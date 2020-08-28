import React, { useEffect } from 'react';
import connectVideo from '../../assets/videos/connect.mp4';
import poster from '../../assets/images/project-1.jpeg';
import { Link } from 'react-router-dom';

import AOS from 'aos';
// import "aos/dist/aos.css";

const Contact = () => {
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
    <section className="connect" data-aos="fade-right">
      <video
        controls
        autoPlay
        muted
        loop
        className="video-container"
        poster={poster}
      >
        <source src={connectVideo} type="video/mp4" />
          Sorry, your browser does not support embedded videos
        </video>
      <div className="video-banner" data-aos="zoom-in-up">
        <div className="section-title">
          <h2>let's get in touch</h2>
          <div className="underline"></div>
        </div>
        <p className="video-text">
          You Can contact me to hire for any knid of
          services related to Web Development and Design or Mobile App Development and Design.
          For Node.JS Rest API`s
          </p>
        <Link to="/contact" className="btn">contact me</Link>
      </div>
    </section>
  )
}

export default Contact
