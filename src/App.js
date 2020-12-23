import './App.css';
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';
import Blog from './components/Blog.js';
import { Switch, Route } from 'react-router-dom';
import HeaderImage from './components/HeaderImage.js'
import Footer from './components/Footer.js';


function App() {

  return (
    <div className="App">
      <div id="navbar"><NavBar /></div>
      <div id='headerImg'><HeaderImage /></div><br></br>
      <Switch>
        <Route exact path='/' component={MainContainer}/>
        <Route exact path='/about'component={About}/>
        <Route exact path='/projects'component={Projects}/>
        <Route exact path='/contact'component={Contact}/>
        <Route exact path='/blog'component={Blog}/>
      </Switch>
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default App;
