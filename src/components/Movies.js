import React, { Component, lazy, Suspense } from 'react';
import './Movies.css';

import Loading from './Loading';
// import SelectedMovie from './SelectedMovie';
const SelectedMovie = lazy(() => import('./SelectedMovie'));

class Movies extends Component {
  static displayName = 'Movies';

  state = {
    // movies: null,
    // loading: false,
    // error: null,
    selected: null
  };

  // async componentDidMount() {
  //   try {
  //     this.setState({ loading: true });
  //     const rsp = await fetch('/movies.json');
  //     const movies = await rsp.json();
  //     this.setState({ movies, loading: false });
  //   } catch (error) {
  //     this.setState({ error, loading: false });
  //   }
  // }

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

  // componentWillMount() {}

  getMovieList(movies) {
    const result = (
      <div className="movies">
        {movies.map(movie => this.getMovieListCard(movie))}
      </div>
    );

    return result;
  }

  render() {
    const { loading, movies, error } = this.props;
    const { selected } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return <div className="error">{error.message}</div>;
    }

    if (!movies) {
      return null;
    }

    const moviesList = this.getMovieList(movies);

    return (
      <div className="container">
        <Suspense fallback={<Loading />}>
          {moviesList}
          {selected && (
            <SelectedMovie
              key={selected.id}
              selected={selected}
              onMovieCleared={this.onMovieCleared}
            />
          )}
        </Suspense>
      </div>
    );
  }
}

export default Movies;
