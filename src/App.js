import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './partials/Header';
import About from './content/About';
import Project from './content/Project';
import ImageViewer from './ImageViewer';
import Nav from './partials/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageViewerSrc: null,
      menuActive: false
    };

    this.setImageViewerSrc = this.setImageViewerSrc.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  setImageViewerSrc(src) {
    this.setState({
      imageViewerSrc: src ? '/images/full/'+src : null,
      menuActive: this.state.menuActive
    });
  }

  toggleMenu() {
    this.setState({
      menuActive: !this.state.menuActive
    });
  }

  closeMenu() {
    this.setState({
      menuActive: false
    });
  }

  render() {
    return (
      <Router>
        <div className={'App ' + (this.state.menuActive ? 'Menu-active' : '')}>
          <Header toggleMenu={this.toggleMenu} />
          <div className="App-content">
            <Nav closeMenu={this.closeMenu} />
            <Route exact path="/" component={About} />
            <Route path="/projects/:slug"
              component={(props) => <Project {...props} setImageViewerSrc={this.setImageViewerSrc} />}
            />
          </div>
          <ImageViewer imageViewerSrc={this.state.imageViewerSrc}
            closeImageViewer={() => this.setImageViewerSrc(null)} />
        </div>
      </Router>
      );
  }
}

export default App;
