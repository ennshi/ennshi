import React from 'react';
import { moviesData } from '../moviesData';
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../utils/api";
import {MovieTabs} from "./MovieTabs";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            total_pages: 500,
            total_movies: 0,
            current_page: 1,
            movies: [],
            moviesWillWatch: [],
            sort_by: 'popularity.desc'
        };
        //this.removeMovie = this.removeMovie.bind(this);
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-9'>
                        <div className='row mb-4'>
                            <div className='col-12'>
                                <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy}/>
                            </div>
                        </div>
                        <div className='row'>
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
        this.getMovies();
    }
    componentDidUpdate() {
        this.getMovies();
    }
    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=500`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results
                });
            })
            .catch((e) => {
                throw new Error(e);
            });
    };
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
    updateSortBy = (value) => {
        this.setState({
            sort_by: value
        });
    }
}


export default App;
