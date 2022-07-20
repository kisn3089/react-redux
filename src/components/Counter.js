import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const increse = () => {
    dispatch(counterActions.increse(10))
  }
  
  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.show())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increse}>Increse10</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
