import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList';


function App() {
  const [state, setState] = useState('red')
  const [color, setColor] = useState('')

  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {name: uName, age: uAge, id: Math.random().toString()},
      ]
    })
  };

  const submitHandler = () => {
    setColor(prev => !prev)
  }

  return (
    <>
    <div style={{backgroundColor: state, width: '200px', height: '100px'}}/>
    <button onClick={() => setState('yellow')}>yellow</button>
    <button onClick={() => setState('red')}>red</button>
    {/* change input */}
    <input style={{backgroundColor: color ? 'red' : 'black'}}/>
    <button onClick={submitHandler}>change</button>
    <input style={{backgroundColor: color ? 'black' : 'red'}}/>
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={userList}/>
      
    </>
  )
}

export default App;

