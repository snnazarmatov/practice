import React from 'react'
import AddMovie from './Components/AddMovie'

export default function App() {

  async function addMovieHandler(movie){
    const response = await fetch('https://react-http-test-c76c4-default-rtdb.firebaseio.com/movies.json',{
      method: 'POST',
      //json object жибериш кк
      body: JSON.stringify(movie),
      //headers object получает пароль входы данных авторизации
      headers: {
        'Content-type': 'aplication/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
    </React.Fragment>
  )
}
