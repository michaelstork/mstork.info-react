import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../../data/projects.json';
import './Panel.css';

function createMarkup (html) {
  return {__html: html};
}

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      project: projects.find(
        project => project.slug === props.match.params.slug
      )
    };
  }

  componentWillReceiveProps(props) {
    this.setState((prevState, props) => {
      return {
        project: projects.find(
          project => project.slug === props.match.params.slug
        )
      };
    });
  }

  createDisplayUrl() {
    if (this.state.project.urlTitle) return this.state.project.urlTitle;

    return this.state.project.url
      ? this.state.project.url.replace(/https?:\/\//, '')
      : '';
  }

  render() {
    return (
      <div className="Panel-content">
        <div>
          <div className="Panel-header">
            <h2>
              <img src={'/images/icons/' + this.state.project.icon} alt={this.state.project.title + ' icon'} />
              <span>{this.state.project.title}</span>
            </h2>
            <Link to={this.state.project.url} className="Button">
              <i className="mdi mdi-link-variant"></i>
              <span>{this.createDisplayUrl()}</span>
            </Link>
          </div>
          <div className="Panel-info">
            <div className="Panel-intro" dangerouslySetInnerHTML={createMarkup(this.state.project.intro)}></div>
            <div className="Panel-screenshots">
              {this.state.project.screenshots.map(image =>
                <div style={{backgroundImage: 'url(/images/thumbnails/'+image+')'}} key={image}></div>
              )}
            </div>
            <div className="Panel-details" dangerouslySetInnerHTML={createMarkup(this.state.project.details)}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;