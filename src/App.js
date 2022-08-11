import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch(); // change state
  const currCash = useSelector((state) => state.cash); // get current state

  return (
    <div className='App'>
      <div>
        <h1>{currCash}</h1>
        <button
          onClick={() => {
            dispatch({ type: 'ADD_CASH', payload: 10 });
          }}
        >
          Deposit 10$
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'GET_CASH', payload: 10 });
          }}
        >
          Withdraw 10$
        </button>
      </div>
    </div>
  );
}

export default App;
