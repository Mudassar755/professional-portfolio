import React, { useEffect } from 'react'
import AOS from 'aos';
// import "aos/dist/aos.css";

const Testimonial = () => {
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
    <section className="section timeline">
      <div className="section-title" data-aos="flip-left">
        <h2>timeline</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center timeline-center">
        <article className="timeline-item" data-aos="fade-right">
          <h4>2020</h4>
          <p>
            I have joined <a href="https://www.contentarcade.com/" target="_blank" rel="noopener noreferrer"> ContentArcade</a>{' '}
            a well known IT Company as MERN Stack Developer in March-2020 and currently working here.
            and contributing in projects as Front-End Developer.
            I worked on the technologies in recent project
            <a href="https://designstudio.smallseotools.com/resume-builder" target="_blank" rel="noopener noreferrer"> Online Resume Builder </a>
            are React.Js, Redux,
            React-Bootstrap, Styled-Components


          </p>
          <span className="number">
            1
          </span>
        </article>
        <article className="timeline-item" data-aos="fade-left">
          <h4>2019</h4>
          <p>
            I have worked in <a href="http://www.mashkraft.com/" target="_blank" rel="noopener noreferrer"><strong>Mashkraft </strong></a> a very good IT Company
            as MERN Stack Developer from Sep-2019 - March-2020
            I have worked on the Admin Panel of widely used Mobile App of the Company {' '}
            <a href="https://www.helsedesign.no/app-1" target="_blank" rel="noopener noreferrer"><strong>HelseDesign</strong></a> named {' '}
            <a href="https://www.appngo.no/" target="_blank" rel="noopener noreferrer"><strong>AppnGo</strong></a>{' '}
            in Norway. as Full-Stack(MERN) Developer. I have worked on the project from
            Front-to-Back Individually including deployment on Heroku Server. Worked on many technologies in the project
            but main technologies are ReactJs, Redux, Styled-Components, WebPack, GraphQL, AppoloServer, AppoloClient, PostgreSQL, Docker
          </p>
          <span className="number">
            2
          </span>
        </article>
        <article className="timeline-item" data-aos="fade-right">
          <h4>2018</h4>
          <p>
            I started my career as Professional Developer by working in the IT Company{' '}
            <a href="http://www.gamicacloud.com/" target="_blank" rel="noopener noreferrer"><strong>GamicaCloud</strong></a>{' '}
            in Faisalabad, I worked here from October-2018 - Sep-2019.
            Mostly I have worked on eCommerce based projects in different roles.
          </p>
          <span className="number">
            3
          </span>
        </article>
        {/* <article className="timeline-item">
          <h4>2017</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
            autem, ea excepturi.
          </p>
          <span className="number">
            4
          </span>
        </article>
        <article className="timeline-item">
          <h4>2016</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
            autem, ea excepturi.
          </p>
          <span className="number">
            5
          </span>
        </article>
        <article className="timeline-item">
          <h4>2015</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
            autem, ea excepturi.
          </p>
          <span className="number">
            6
          </span>
        </article> */}
      </div>
    </section>
  )
}

export default Testimonial
