import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['Bob','Kevin','Rakesh Sharma'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{"Rakesh"}</p>
        <p>{"1"}</p>
        <p>{[1,2,3,4]}</p>
        {/* <p>{name}</p> */}
      </header>
    </div>
  );
}

export default App;
