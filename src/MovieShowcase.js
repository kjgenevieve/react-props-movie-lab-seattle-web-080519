import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    return movieData.map((movie) => 
      <MovieCard key={ movie.title } title={movie.title} genres={movie.genres} poster={movie.poster} IMDBRating={movie.IMDBRating} />
    )
    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}