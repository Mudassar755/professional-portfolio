import React, { useEffect } from 'react';
import AOS from 'aos'

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
    <section className="section single-page">
      <div className="section-title" data-aos="flip-right">
        <h1>contact</h1>
        <div className="underline"></div>
      </div>
      <div className="section-center page-info" data-aos="fade-right">
        <p>
          If you are looking to get ahold of me, you can send me an email at
          <a href="mailto:mudasar.se@gmail.com"> mudasar.se@gmail.com</a>
        </p>
        <p>
          You can also reach me on Twitter at
          <a href="https://www.twitter.com">@your_social_media </a>
        </p>
      </div>
    </section>
  )
}

export default Contact
