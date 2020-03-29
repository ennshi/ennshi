import React from "react";
const MovieItem = (props) => {
    const {movie, removeMovie} = props;
   return(
       <div key={movie.id}>
          <p>{movie.title}</p>
          <button type='button' onClick={removeMovie.bind(null, movie)}>Delete</button>
       </div>
   );
};

export default MovieItem;
