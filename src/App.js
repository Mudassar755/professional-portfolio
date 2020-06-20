import React from 'react';
import LandingPage from './pages/LandingPage'
// import './css/styles.css';
import './App.css';
import './assets/fontawesome-free-5.12.1-web/css/all.min.css';
import Footer from './compnents/Footer';
import Navbar from './compnents/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div >
      <Navbar />
      <Switch>
        <Route exact path = '/' component = {LandingPage} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
