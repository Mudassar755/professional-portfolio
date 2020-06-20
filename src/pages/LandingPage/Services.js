import React from 'react'

const Services = () => {
    return (
        <section className="section bg-grey">
        <div className="section-title">
          <h2>services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-center section-center">
          <article className="service">
            <i className="fas fa-code service-icon"></i>
            <h4>web development</h4>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
              corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
              obcaecati vero.
            </p>
          </article>
          <article className="service">
            <i className="fab fa-sketch service-icon"></i>
            <h4>web design</h4>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
              corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
              obcaecati vero.
            </p>
          </article>
          <article className="service">
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
