import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementBy } from './store/slices/counter';

import './App.css'


function App() {

  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <img src="/src/vite.svg" className="logo" alt="Vite logo" />
      <p>count is { counter }</p>
      <p>
      
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
      
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
      
        <button onClick={ () => dispatch( incrementBy(2) ) }>
          Increment by 2
        </button>
      
      </p>

    </div>
  );

}

export default App
