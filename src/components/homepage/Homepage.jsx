import React from 'react';
// import './About.css'
import Header from '../header/Header';
import About from '../about/About';
import Blog from '../Blog/Blog'
import Contact from '../contact/Contact';
import Courses from '../courses/Courses';
import Event from '../event/Event';
import Feature from '../Feature/Feature';
import Home from '../home/Home';
import Instructor from '../Instructor/Instructor';
import Testmonial from '../testmonial/Testmonial';
import Formation from '../formation particulier/Formation';
import CoursesP from '../courses popular/Courses';
import Footer from '../footer/Footer';

function Homepage() {
  return (
<>
    <Header />
    <Home />
    <CoursesP />
    <About />
    <Courses />
    <Event />
    <Feature />
    <Instructor />
    <Testmonial />
    {/* <Blog /> */}
    <Contact />
    <Footer />

</>
     
  )
}

export default Homepage
