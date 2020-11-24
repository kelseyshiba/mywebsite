import './App.css';
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js';
import About from './components/About.js';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div id="navbar"><NavBar /></div>
      <Switch>
        <Route exact path='/' component={MainContainer}/>
        <Route exact path='/about'component={About}/>
      </Switch>
    </div>
  );
}

export default App;
