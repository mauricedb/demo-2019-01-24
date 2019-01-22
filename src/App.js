import React, { Component } from 'react';
import './App.css';

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
        <footer>
          <a href="https://www.themoviedb.org/">From The Movie DB</a>
        </footer>
      </>
    );
  }
}

export default App;
