import React from 'react';
import {NavLink} from 'react-router-dom';
import projects from '../../data/projects.json';

const ProjectsList = () => (
  <div>
    {projects.map(project =>
      <div className="Nav-projects-list-item" key={project.slug}>
        <NavLink to={'/projects/' + project.slug}
          activeClassName="Active-nav-item"
          className="Nav-projects-list-item-content">
          <h2>{project.title}</h2>
          <p className="Nav-project-item-tech">{project.tech.join(', ')}</p>
        </NavLink>
      </div>
    )}
  </div>
)

export default ProjectsList;