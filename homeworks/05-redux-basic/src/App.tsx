import './App.css';
import { balance, IBalanceAction } from './redux/balance'

//Test array
const array: IBalanceAction[] = [
  { type: 'UPDATE_BALANCE', payload: 1000.0 },
  { type: 'CREDIT', payload: 200.0 },
  { type: 'CREDIT', payload: 100.0 },
  { type: 'SET_BALANCE_WITH_TAX', payload: 14.0 },
  { type: 'DEBIT', payload: 250.0 },
  { type: 'UPDATE_BALANCE', payload: 1000.0 },
];

//Test actions dispatching
array.forEach(action => {
  balance.dispatch(action)
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        05-redux-basic
      </header>
    </div>
  );
}

export default App;
