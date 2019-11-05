import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  state={
    filter:'all'
  }

  handleFilterClick = (mode, e) =>{
    console.log('Fetching details for', mode)
    e.stopPropagation();
    this.setState({filter: mode})
  }


  render() {
    const allFilms = this.props.films.map(film => <FilmRow key={film.id} film={film}/>);
    return(
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
        <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={e => this.handleFilterClick('all', e)}>
            ALL
        <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={e => this.handleFilterClick('faves', e)}>
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>

  {allFilms}
</div>
    )
  }
}

export default FilmListing;