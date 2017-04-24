import React from 'react';
import {Link} from 'react-router-dom';
import './NavIndicator.css';


class NavIndicator extends React.Component {
	render() {
    return (
  		<div className="Nav-indicator">
  			<div>
  				<Link to="/" className="Nav-indicator-item">
            <i className="mdi mdi-account-box-outline"></i>
            <span>About</span>
          </Link>
          {this.props.projects.map((project, index) =>
            <Link className="Nav-indicator-item"
              to={'/projects/'+project.slug}
              key={project.slug}>
              {padString(index + 1)}
            </Link>
          )}
  			</div>
        <i className="Nav-indicator-underline"></i>
  		</div>
    );
	}
}

function padString (str) {
  return ('00' + str).substr(-2, 2);
}

export default NavIndicator;