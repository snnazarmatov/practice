import React,{useState,useEffect,useCallback} from 'react';
import MoviesLists from './Components/MoviesLists';
import './App.css'
import AddMovie from './Components/AddMovie';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [time,setTime] = useState(0);
  // useEffect(() => {
  //   const flagInterval = setInterval(() => {
  //     console.log('fired');
  //     setTime(time + 1)
  //   }, 1000);
  //   return () => clearInterval(flagInterval)

  // })
// useEffect ke dependise катары fetchMoviesHandler берсек без конечный цикл болгон,аны чечиш учун useCallback мн ороп койдук,бир жолу иштейт болду. 
  const fetchMoviesHandler = useCallback(async () => {
    //загрузка башталды
    setIsLoading(true)
    setError(null);
    try {
      const response = await fetch('https://react-http-test-c76c4-default-rtdb.firebaseio.com/movies.json')

      //1 backend тен келген ката учун
      if(!response.ok) {
        //response ok ге = эмес болсо new Error чыгат
        throw new Error(`somthing went wrong ${response.status}`)
      }
      //response пустой болушу мумкун сунда аны кутуптур деп await jazabyz
      const data = await response.json();
      const loadedMovies = [];

      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      // const transformedMovies = data.results.map(movieData => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //     director: movieData.director,
      //     producer: movieData.producer
      //   }
      // })
      setMovies(loadedMovies);
      //fetch ten ketktn kata uchun
    }catch (error){
      setError(error.message)
    }
    //try дын ичиндегилер аткарылып буткондон кийин false кылып койобуз
    setIsLoading(false)
  }, [])

  //кнопканы баспаса дагы загрузка болгондо сразу мувилур чыга турган болот

  useEffect(() => {
    fetchMoviesHandler();

  }, [fetchMoviesHandler]);




  // post 
  async function addMovieHandler(movie){
    const response = await fetch('https://react-http-test-c76c4-default-rtdb.firebaseio.com/movies.json',{
      method: 'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }



  // **************
//movies тер табылбай калган учурда 
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
  //************ */
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
        {/* <button onClick={fetchMoviesHandler}>Fetch movies</button> */}
        {/* <h1>Movies:</h1> */}
        {/* <p>{time}</p> */}
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>  
  )
}

export default App
