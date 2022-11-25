import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Profile text={{fname: "Anand Kumar"}} data="Shaw"/><hr/>
        <Profile text={{fname: "Sumit Kumar"}} data="Shaw"/>
      </header>
    </div>
  );
}

export default App;