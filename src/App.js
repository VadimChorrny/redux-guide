import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch(); // change state // Analog: const data = useContext(Context);
  // Get current state
  const currCash = useSelector((state) => state.cashR.cash); // get current state
  const clients = useSelector((state) => state.clientsR.clients); // get state(clinets[]) from clientReducer

  // Functions for work with cashReducer
  const addCash = (amount) => {
    dispatch({ type: 'ADD_CASH', payload: amount });
  };

  const withdrawCash = (amount) => {
    dispatch({ type: 'WITHDRAW_CASH', payload: amount });
  };

  // Functions for work with clientReducer
  const createClient = (name, surname) => {
    const client = {
      id: Date.now(),
      name: name,
      surname: surname,
    };
    console.log('Client before create: ', client);
    dispatch({ type: 'CREATE_CLIENT', payload: client });
  };

  const removeClient = (client) => {
    console.log('Client after remove: ', client);
    dispatch({ type: 'REMOVE_CLIENT', payload: client.id });
  };

  return (
    <div className='App'>
      <div>
        <h1>{currCash}</h1>
        <button onClick={() => addCash(Number(prompt()))}>Deposit</button>
        <button onClick={() => withdrawCash(Number(prompt()))}>Withdraw</button>
        <br />
        <button
          onClick={() =>
            createClient(prompt('Enter name'), prompt('Enter surname'))
          }
        >
          Create client
        </button>
        {clients.map((client, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid black',
              padding: '10px',
              marginTop: '5px',
            }}
            onClick={() => {
              removeClient(client);
              console.log(clients);
            }}
          >
            {client.name} {client.surname}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
