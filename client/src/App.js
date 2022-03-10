import logo from './miesh-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="400px" className="App-logo" alt="logo" />
        <p>Follow setup instructions :)</p>
        <a
          className="App-link"
          href="https://github.com/tomal02/MERN-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Boilerplate Github
        </a>
      </header>
    </div>
  );
}

export default App;
