import React from 'react';
import './App.css';
import { moviesData } from '../moviesData';
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../utils/api";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
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
                            <MovieTabs />
                            {this.state.movies.map(movie =>
                                <div className='col-6 mb-4' key={movie.id}>
                                    <MovieItem movie={movie}
                                               removeMovie={this.removeMovie}
                                               addToWillWatch={this.addToWillWatch}
                                               removeWillWatch={this.removeWillWatch}
                                    />
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
    componentDidMount() {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results
                });
            })
            .catch((e) => {
                throw new Error(e);
            });
    }

    removeMovie = (movie) => {
        const updatedMovies = this.state.movies.filter( item => item.id !== movie.id);
        this.setState({
            movies: updatedMovies
        });
    };
    addToWillWatch = (movie) => {
        const updatedWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState({
            moviesWillWatch: updatedWillWatch
        });
    };
    removeWillWatch = (movie) => {
        const updatedWillWatch = [...this.state.moviesWillWatch].filter(item => item.id !== movie.id);
        this.setState({
            moviesWillWatch: updatedWillWatch
        });
    };
}

export default App;
