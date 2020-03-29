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

// function MovieItem(props) {
//     const {data: {title, average_rate, image, overview}} = props;
//     return (
//       <div>
//           <Image src={image} alt={title}/>
//           <p>{title}</p>
//           <p>{average_rate}</p>
//       </div>
//     );
// }
class MovieItem extends React.Component {
    render() {
        console.log(this);
        const {data: {title, average_rate, image, overview}} = this.props;
        return (
          <div>
              <Image src={image} alt={title}/>
              <p>{title}</p>
              <p>{average_rate}</p>
          </div>
        );
    }
}

function App() {
  return (<MovieItem data={movie}/>);
}

export default App;
