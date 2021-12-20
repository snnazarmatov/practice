import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {counterAction} from '../store/index'

const Counter = () => {
     const counter = useSelector(state => state.counter.counter);
     const showCounter = useSelector(state => state.counter.showCounter);
     const dispatch = useDispatch();

     const incrementHandlelr = () => {
         dispatch(counterAction.icrement());
     }

     const decrementHandler = () => {
         dispatch(counterAction.decrement());
     }

     const increaceHandler = () => {
         dispatch(counterAction.increace(5))
     }

     const toggleCounterHandler = () => {
         dispatch(counterAction.toggle());
     };

     return (
         <main className={classes.counter}>
             <h1>Redux Counter</h1>
             {showCounter && <div className={classes.value}>{counter}</div>}
             {/* 1 */}
             <button onClick={incrementHandlelr}>increment</button>
             {/* 2 */}
             <button onClick={decrementHandler}>decrement</button>
             {/* 3 */}
             <button onClick={increaceHandler}>increace</button>
             {/* 4 */}
             <button onClick={toggleCounterHandler}>toggle</button>
         </main>
     )
}
export default Counter;