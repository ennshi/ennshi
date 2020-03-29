import React from 'react';
import './App.css';

const movie = {
    title: 'Interstellar',
    average_rate: 8.2,
    image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    overview: 'Interstellar is a 2014 epic science fiction film directed, co-written and co-produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine.'
};

function Image(props) {
    const {src, alt} = props;
    return (
        <img src={src} alt={alt}/>
    )
}

class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            like: false
        };
    }
    render() {
        const {data: {title, average_rate, image, overview}} = this.props;
        return (
          <div>
              <Image src={image} alt={title}/>
              <p>{title}</p>
              <p>{average_rate}</p>
              <button type="button" onClick={this.toggleOverview}>{this.state.show ? 'Hide' : 'Show'}</button>
              <button type="button"
                      className={!this.state.like ? 'btn-like' : null}
                      onClick={this.toggleLike}>{this.state.like ? 'Unlike' : 'Like'}
              </button>
              {this.state.show ? <p>{overview}</p> : null}
          </div>
        );
    }
    toggleOverview = () => {
        this.setState({show: !this.state.show});
    };
    toggleLike = () => {
        this.setState({like: !this.state.like});
    };
}

function App() {
  return (<MovieItem data={movie}/>);
}

export default App;
