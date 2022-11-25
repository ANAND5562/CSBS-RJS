import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* To render Profile.js file in header */}
        <Profile text="Functional Profile Component not Profile Component"/>
      </header>
    </div>
  );
}

export default App;