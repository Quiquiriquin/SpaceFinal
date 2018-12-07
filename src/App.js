import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// https://backend-space-twfryfgytw.now.sh/

import 'aos/dist/aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Routes from './Routes';

const AOS = require('aos');

class App extends Component {

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
        <Routes />
    );
  }
}

export default App;
