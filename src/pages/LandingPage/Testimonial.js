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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
            autem, ea excepturi.
          </p>
          <span className="number">
            1
          </span>
        </article>
        <article className="timeline-item" data-aos="fade-left">
          <h4>2019</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
            autem, ea excepturi.
          </p>
          <span className="number">
            2
          </span>
        </article>
        <article className="timeline-item" data-aos="fade-right">
          <h4>2018</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
            autem, ea excepturi.
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
