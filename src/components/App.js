import React from 'react';
import { moviesData } from '../moviesData';
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../utils/api";
import {MovieTabs} from "./MovieTabs";
import {MoviePages} from "./MoviePages";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            total_pages: 500,
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
                    <div className='col-12 col-md-9'>
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
                <div className='row'>
                    <MoviePages changePage={this.changePage}
                                setPage={this.setPage}
                                cur_page={this.state.current_page}
                                total_pages={this.state.total_pages}
                    />
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.getMovies();
    }
    // componentDidUpdate(prevState) {
    //     this.getMovies();
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // to be able to see the effect of this.removeMovie
        if(prevState.current_page !== this.state.current_page) {
            this.getMovies();
        }
    }

    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.current_page}`)
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
        const {movies, moviesWillWatch} = this.state;
        const updatedMovies = movies.filter( item => item.id !== movie.id);
        const updatedWillWatch = moviesWillWatch.length ? moviesWillWatch.filter( item => item.id !== movie.id) : [];
        this.setState({
            movies: updatedMovies,
            moviesWillWatch: updatedWillWatch
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
        this.setPage(1);
        this.setState({
            sort_by: value
        });
    };

    setPage = (page) => {
        if(this.state.current_page !== page) {
            this.setState({
                current_page: page
            });
        }
    };

    changePage = (symbol) => {
        const {current_page, total_pages} = this.state;
        if(symbol === '+') {
            if(current_page < total_pages) {
                this.setPage(current_page + 1);
            }
        } else {
            if(current_page > 0) {
                this.setPage(current_page-1);
            }
        }
    };
}


export default App;
