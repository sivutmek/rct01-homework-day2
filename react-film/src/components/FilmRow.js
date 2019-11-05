import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from "./Fave";

class FilmRow extends Component {
  handleDetailsClick = () => {

  }

  render() {
    const year = new Date(this.props.film.release_date).getFullYear();
    return(
      <div className="film-row">
        <FilmPoster posterPath={this.props.film.poster_path} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{year}</p>
        </div>
        <Fave/>
      </div>
    )
  }
}

export default FilmRow;