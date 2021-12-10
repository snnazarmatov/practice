import React,{useState} from 'react'
import MoviesList from './Components/MoviesList';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([]);
//1 edding error
  const [error, setError] = useState(null);



  function fetchMoviesHandler() {
    //2 fetch кылаардан алдын тазалап коюу кк дагы бир жолу точно ошибка жок деген
    setError(null)
    fetch('https://swapi.dev/api/films',{
      method: 'GET'
    })// url дан кийин утур койуп options жазып койсок болот,Жазбай койсокда url ди жазганда фетч озу билип аткарат.
    .then((responce) => {
      return responce.json();

    })
    .then((data) => {
      console.log(data.results);
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
          director: movieData.director,
          producer: movieData.producer
        }
      })
      setMovies(transformedMovies)
    })
    //3 catch
    .catch((error) => {
      //4 error message
      setError(error.message);
    })
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>
          Fetch movies
        </button>
      </section>
      <section>
      {/* 5 эгерде error бар болсо error чыгарып бер жок болсо MoviesList чыгар*/}
        {error ? <p>{error}</p> : <MoviesList movies={movies}/>}
      </section>
      
    </React.Fragment>
  )
}

export default App

