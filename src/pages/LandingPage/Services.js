import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const Services = () => {
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
    <section className="section bg-grey">
      <div className="section-title" data-aos="flip-right">
        <h2>services</h2>
        <div className="underline"></div>
      </div>
      <div className="services-center section-center">
        <article className="service" data-aos="fade-right">
          <i className="fas fa-code service-icon"></i>
          <h4>web development</h4>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
            </p>
        </article>
        <article className="service" data-aos="fade-down">
          <i className="fab fa-sketch service-icon"></i>
          <h4>web design</h4>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
            </p>
        </article>
        <article className="service" data-aos="fade-left">
          <i className="fab fa-android service-icon"></i>
          <h4>app design</h4>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
            obcaecati vero.
            </p>
        </article>
      </div>
    </section>
  )
}

export default Services
