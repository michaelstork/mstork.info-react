import React from 'react';
import {Link} from 'react-router-dom';
import projects from '../../data/projects.json';

const ProjectsList = () => (
	<div>
	 {projects.map(project =>
      <div className="Nav-projects-list-item" key={project.slug}>
        <Link className="Nav-projects-list-item-content" to={'/projects/' + project.slug}>
          <h2>{project.title}</h2>
          <p className="Nav-project-item-tech">{project.tech.join(', ')}</p>
        </Link>
      </div>
    )}
	</div>
)

export default ProjectsList;