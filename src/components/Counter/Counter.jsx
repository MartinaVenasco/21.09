import { useSelector, useDispatch } from "react-redux"
import './index.css';



const Counter = () => {

  const state = useSelector(state => state);
  const { count, user} = state;
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <h2>{ user.userName }</h2>
      <h1>{ count.value }</h1>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'SET_USERNAME', payload: 'Username'})}>Set as Username</button>
    </div>
  )
}

export default Counter;