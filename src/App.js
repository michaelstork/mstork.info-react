import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './partials/Header';
import Nav from './partials/Nav';
import About from './content/About';
import Projects from './content/Projects';
import ImageViewer from './ImageViewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageViewerSrc: '/images/full/example1.jpg'
    };

    this.setImageViewerSrc = this.setImageViewerSrc.bind(this);
  }

  setImageViewerSrc(src) {
    this.setState({imageViewerSrc: null});
  }

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
          <ImageViewer imageViewerSrc={this.state.imageViewerSrc} closeImageViewer={() => this.setImageViewerSrc(null)} />
        </div>
      </Router>
      );
  }
}

export default App;
