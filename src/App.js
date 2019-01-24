import React, { Component, StrictMode, Fragment } from 'react';
import './App.css';

import Footer from './components/Footer';
import Movies from './components/Movies';
import Fetch from './components/Fetch';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h2>Top Rated Movies</h2>
        </header>
        {/* <Movies /> */}
        <StrictMode>
          <Fetch url="/movies.json">
            {({ data, ...props }) => <Movies movies={data} {...props} />}
          </Fetch>
        </StrictMode>
        <Footer />
      </>
    );
  }
}

export default App;
