import React from 'react';
import './App.css';
import { moviesData } from '../moviesData';
import MovieItem from "./MovieItem";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: moviesData,
            moviesWillWatch: []
        };
        //this.removeMovie = this.removeMovie.bind(this);
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-9'>
                        <div className='row'>
                            {this.state.movies.map(movie =>
                                <div className='col-6 mb-4' key={movie.id}>
                                    <MovieItem movie={movie} removeMovie={this.removeMovie} addMovieToWatch={this.addMovieToWillWatch}/>
                                </div>)}
                        </div>
                    </div>
                    <div>
                        <p>Will Watch: {this.state.moviesWillWatch.length}</p>
                    </div>
                </div>
            </div>
        );
    }
    removeMovie = (movie) => {
        const updatedMovies = this.state.movies.filter( item => item.id !== movie.id);
        this.setState({
            movies: updatedMovies
        });
    };
    addMovieToWillWatch = (movie) => {
        const updatedWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState({
            moviesWillWatch: updatedWillWatch
        });
    };
}

export default App;
