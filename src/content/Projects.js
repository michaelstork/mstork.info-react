import React from 'react';
import {Route} from 'react-router-dom';
import Project from './Project';

const Projects = ({match}) => (
  <div className="Panel-container">
    <Route path={`${match.url}/:slug`} component={Project} />
  </div>
)

export default Projects;