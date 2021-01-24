import React from 'react';
import axios from "axios";
import Movie from "./movie";

class App extends React.Component{ // React.component로 부터 상속 받는다.
  // mount는 application을 실행하면 생거나는것
  state = {
    isLoading: true,
    movies: []
  }; 
  // Q1 render을 하면 호출되는 life cycle method는? = componentDidMount
  getMovies = async() => {
    const {data: { data : {movies}}} = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <div>{isLoading ? "Loading..." : movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        ))}
      </div>
    );
  };
}

export default App;
