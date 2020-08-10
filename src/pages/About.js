import React, { useEffect } from 'react';
import AOS from 'aos'

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
    <section className="section single-page">
      <div className="section-title" data-aos="flip-right">
        <h1>about me</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center page-info" data-aos="fade-right">
        <p>
          Hello, I am John Doe and I am a web developer. I live and work in
          somewhere warm. I spend most of my day, experimenting with HTML, CSS
          and JavaScript (and its endless list of frameworks). I enjoy coding
          and the challenge of learning something new everyday. You can also
          find me at youtube channel
          <a href="https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA"
          >coding addict</a
          >
        </p>
      </div>
    </section>
  )
}

export default About
