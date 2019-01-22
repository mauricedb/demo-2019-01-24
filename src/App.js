import React, { Component, StrictMode } from 'react';
import './App.css';

import Footer from './components/Footer';
import Movies from './components/Movies';
// import Fetch from './components/Fetch';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h2>Top Rated Movies</h2>
        </header>
        <Movies />
        <Footer />
      </>
    );
  }
}

export default App;
