import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import ProjectsList from './ProjectsList';

class Nav extends React.Component {

  render() {
    return (
      <nav className={'Nav ' + (this.props.menuActive ? 'Active' : '')}>
        <Link to="/"
          className="Nav-mobile-home-item"
          onClick={this.props.closeMenu}>
          <i className="mdi mdi-account-box-outline"></i>
          <span>About</span>
        </Link>
        <div className="Nav-header-item">
          <span>Projects:</span>
        </div>
        <div className="Nav-projects-list" onClick={this.props.closeMenu}>
          <ProjectsList />
        </div>
      </nav>
    );
  }
}

export default Nav;