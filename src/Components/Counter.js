import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counterAction';


const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
      if(counter === 10)return
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
      if(counter === 0) return
    dispatch(counterActions.decrement());
  };
  return (
    <main>
      <h1>Redux-toolkit Counter</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
};
export default Counter;