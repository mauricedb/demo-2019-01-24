import React, { Component } from 'react';

class Jokes extends Component {
  state = { jokes: [] };

  componentDidMount() {
    fetch(
      'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript'
    )
      .then(rsp => rsp.json())
      .then(data => data.value)
      .then(jokes => this.setState({ jokes }));
  }

  render() {
    const { jokes } = this.state;
    return (
      <ul>
        {jokes.map(joke => (
          <li key={joke.id}>{joke.joke}</li>
        ))}
      </ul>
    );
  }
}

export default Jokes;
