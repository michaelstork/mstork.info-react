import React from 'react';
import SkillsList from '../partials/Skills';
import Nav from '../partials/Nav';
import NavIndicator from '../partials/NavIndicator';
import info from '../../data/info.json';
import projects from '../../data/projects.json';
import contact from '../../data/contact.json';

function createMarkup (html) {
  return {__html: html};
}

class About extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      info: info,
      contact: contact
    };
  }

  render() {
    return (
      <div>
        <NavIndicator {...this.props} projects={projects} />
        <Nav />
        <div className="Panel-container">
          <div className="Panel-content">
            <div>
              <div className="Panel-header">
                <h2>
                  <span>About</span>
                </h2>
              </div>
              <div className="Panel-info">
                <div className="Panel-intro" dangerouslySetInnerHTML={createMarkup(this.state.info.about)}></div>
              </div>
              <div className="Panel-header">
                <h2>
                  <span>Technical Skills</span>
                </h2>
                <a href={this.state.contact.github} target="_blank" className="Button">
                  <i className="mdi mdi-github-face"></i>
                  <span>GitHub</span>
                </a>
              </div>
              <div className="Panel-info">
                <SkillsList skills={this.state.info.skills} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;