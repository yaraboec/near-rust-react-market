import logo from './logo.svg';
import { login } from './utils/utils';
import './App.css';

const App = () => {

  if ( !window.walletConnection.isSignedIn() ) {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={login}> Login </button>
      </header>
    </div>
    )
  }
}

export default App;
