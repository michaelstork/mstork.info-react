import React from 'react';
import './Nav.css';
import ProjectsList from './ProjectsList';

class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-header-item">
          <span>Projects:</span>
        </div>
        <div className="Nav-projects-list">
          <ProjectsList />
        </div>
      </nav>
    );
  }
}

export default Nav;