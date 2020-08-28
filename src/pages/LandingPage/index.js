import React, { Fragment } from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import Testimonial from './Testimonial';
// import Blogs from './Blogs'

const LandingPage = () => {
    return (
        <Fragment>
            <Header />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Skills />
            <Testimonial />
            {/* <Blogs /> */}
        </Fragment>
    )
}


export default LandingPage;