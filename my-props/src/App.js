import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* passing any attribute */}
        {/* <Profile text="This is the text from ATTRIBUTE!"/> */}
        {/* passing any object */}
        <Profile myobj={{fname: 'Anand Kumar'}} lname="Shaw"/>
      </header>
    </div>
  );
}

export default App;
