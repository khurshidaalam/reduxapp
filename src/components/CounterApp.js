import React from 'react';
import {increment, decrement} from "../actions/index";
import { useDispatch, useSelector } from 'react-redux';
import rootReducers from '../reducers/reducer';
import counterReducer from '../reducers/counter';

const CounterApp = () => {
    const dispatch = useDispatch(rootReducers);
    const myState = useSelector((state)=> state.counterReducer);
    console.log(myState);
  return (
    <div>
        <input type="number" value={myState}/>
        <button onClick={()=> dispatch(increment)}>+</button>
        <button onClick={()=> dispatch(decrement)}>-</button>
    </div>
  )
}

export default CounterApp;