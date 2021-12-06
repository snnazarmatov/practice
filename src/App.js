import React,{useState,useEffect,useCallback} from 'react';
import MoviesLists from './Components/MoviesLists';
import './App.css'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films')

      //1 backend тен келген ката учун
      if(!response.ok) {
        throw new Error(`somthing went wrong ${response.status}`)
      }
      //response пустой болушу мумкун сунда аны кутуптур деп await jazabyz
      const data = await response.json();
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
      setMovies(transformedMovies);
      //fetch ten ketktn kata uchun
    }catch (error){
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  //кнопканы баспаса дагы загрузка болгондо сразу мувилур чыга турган болот

  useEffect(() => {
    fetchMoviesHandler();

  }, [fetchMoviesHandler]);

  let content = <p>Found no movies...</p>

  if(movies.length > 0) {
    content = <MoviesLists movies={movies}/>
  }
  if(error) {
    content = <p>{error}</p>
  }
  if(isLoading) {
    content = <p>Loading...</p>
  }
  return (
    <React.Fragment>
      <section>
        {/* <button onClick={fetchMoviesHandler}>Fetch movies</button> */}
        <h1>Movies:</h1>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>  
  )
}

export default App
