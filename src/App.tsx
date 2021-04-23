import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import UserAvater from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <ClassComponent />
        <UserAvater />
      </main>
    </div>
  );
}

export default App;
