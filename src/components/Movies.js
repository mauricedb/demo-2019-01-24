import React, { Component } from 'react';
import './Movies.css';

class Movies extends Component {
  state = {
    movies: null,
    loading: false,
    error: null,
    selected: null
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const rsp = await fetch('/movies.json');
    const movies = await rsp.json();
    this.setState({ movies, loading: false });
  }

  onMovieClicked = selected => this.setState({ selected });

  onMovieCleared = () => this.setState({ selected: null });

  getMovieListCard(movie) {
    const result = (
      <div
        key={movie.id}
        className="movie"
        onClick={() => this.onMovieClicked(movie)}
      >
        <h4>{movie.title}</h4>
        <img src={movie.image} alt={movie.title} />
        <div>{movie.overview}</div>
      </div>
    );

    return result;
  }

  getMovieList(movies) {
    const result = (
      <div className="movies">
        {movies.map(movie => this.getMovieListCard(movie))}
      </div>
    );

    return result;
  }

  getSelectedMovie() {
    const { selected } = this.state;

    if (!selected) {
      return null;
    }

    const result = (
      <div className="details">
        <div className="detail">
          <div className="detail-header">
            <h4>{selected.title}</h4>
            <span
              className="close-button"
              role="button"
              onClick={this.onMovieCleared}
            >
              &times;
            </span>
          </div>
          <img src={selected.image} alt={selected.title} />
          <div>{selected.overview}</div>
          <ul>
            {selected.genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>
    );

    return result;
  }

  render() {
    const { loading, movies } = this.state;
    if (loading) {
      return <div>Loading data...</div>;
    }

    if (!movies) {
      return null;
    }

    const moviesList = this.getMovieList(movies);
    const selectedMovie = this.getSelectedMovie();

    return (
      <div className="container">
        {moviesList}
        {selectedMovie}
      </div>
    );
  }
}

export default Movies;
