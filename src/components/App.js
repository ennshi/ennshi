import React from 'react';
import './App.css';
import { moviesData } from '../moviesData';
import MovieItem from "./MovieItem";

class App extends React.Component {
    constructor() {
        super();
        this.state = {movies: moviesData}
    }
    render() {
        console.log(this);
        return (
            <div>
            {this.state.movies.map(movie =>
            <MovieItem key={movie.id} movie={movie} removeMovie={this.removeMovie}/>)}
            </div>
        );
    }
    removeMovie = (movie) => {
        const updatedMovies = this.state.movies.filter( item => item.id !== movie.id);
        console.log(updatedMovies);
        this.setState({
            movies: updatedMovies
        });
    }
}

export default App;
