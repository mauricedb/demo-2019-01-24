import React, { Component } from 'react';
import './Movies.css';

class Movies extends Component {
  state = { movies: [], selected: null };

  async componentDidMount() {
    const rsp = await fetch('/movies.json');
    const movies = await rsp.json();
    this.setState({ movies });
  }

  onMovieClicked = selected => {
    this.setState({ selected });
  };

  render() {
    const { movies, selected } = this.state;

    return (
      <>
        <h2>Movies</h2>
        <div className="container">
          <div className="movies">
            {movies.map(m => (
              <div
                key={m.id}
                className="movie"
                onClick={() => this.onMovieClicked(m)}
              >
                <h4>{m.title}</h4>
                <img src={m.image} alt={m.title} />
                <div>{m.overview}</div>
              </div>
            ))}
          </div>
          <div className="details">
            {selected && (
              <div className="detail">
                <h4>{selected.title}</h4>
                <img src={selected.image} alt={selected.title} />
                <div>{selected.overview}</div>
                <ul>
                  {selected.genres.map(genre => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
