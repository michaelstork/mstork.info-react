import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './partials/Header';
import About from './content/About';
import Project from './content/Project';
import ImageViewer from './ImageViewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageViewerSrc: null
    };

    this.setImageViewerSrc = this.setImageViewerSrc.bind(this);
  }

  setImageViewerSrc(src) {
    this.setState({imageViewerSrc: src ? '/images/full/'+src : null});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App-content">
            <Route exact path="/" component={About}/>
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
