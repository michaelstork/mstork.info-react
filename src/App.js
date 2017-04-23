import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './partials/Header';
import Nav from './partials/Nav';
import About from './content/About';
import Projects from './content/Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App-content">
            <Nav />
            <Route exact path="/" component={About}/>
            <Route path="/projects" component={Projects}/>
          </div>
        </div>
      </Router>
      );
  }
}

export default App;
