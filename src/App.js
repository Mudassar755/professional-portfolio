import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/styles.css';
// import './App.css';
import './assets/fontawesome-free-5.12.1-web/css/all.min.css';
import Footer from './compnents/Footer';
import Navbar from './compnents/Navbar';

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <div >
      <Navbar />
      <Switch>
        <Route exact path = '/' component = {LandingPage} />
        <Route exact path = '/about' component = {About} />
        <Route exact path = '/projects' component = {Projects} />
        <Route exact path = '/contact' component = {Contact} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
