import React, { Component } from 'react';
import './App.css';

import Jokes from './components/Jokes';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <>
        {/* <Jokes /> */}
        <Movies />
      </>
    );
  }
}

export default App;
