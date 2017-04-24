import React from 'react';
import {Link} from 'react-router-dom';
import './NavIndicator.css';


class NavIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProjectIndex: this.getProjectIndexBySlug(this.props.match.params.slug)
    };
  }

  componentWillReceiveProps(props) {
    this.setActiveProjectIndex(
      this.getProjectIndexBySlug(props.match.params.slug)
    );
  }

  setActiveProjectIndex(index) {
    this.setState((prevState, props) => {
      return {activeProjectIndex: index};
    });
  }

  getProjectIndexBySlug(slug) {
    const index = this.props.projects.findIndex(
      project => project.slug === slug
    );
    return (index >= 0 ? index : null);
  }

  getIndicatorStyle() {
    return {
      transform: 'translateX('+ (100 * this.state.activeProjectIndex) +'%)'
    };
  }

  renderIndicator() {
    return this.props.match.path === '/'
      ? null
      : <i className="Nav-indicator-underline" style={this.getIndicatorStyle()}></i>;
  }

  getItemClassNames(project) {
    let str = 'Nav-indicator-item';
    if ((!project && this.props.match.path === '/')
      || (project && this.props.match.params.slug === project.slug)) {
      str += ' Nav-indicator-item-active';
    }

    return str;
  }

	render() {
    return (
  		<div className="Nav-indicator">
  			<div>
  				<Link to="/" className={this.getItemClassNames(null)}>
            <i className="mdi mdi-account-box-outline"></i>
            <span>About</span>
          </Link>
          {this.props.projects.map((project, index) =>
            <Link className={this.getItemClassNames(project)}
              to={'/projects/'+project.slug}
              key={project.slug}>
              {padString(index + 1)}
            </Link>
          )}
  			</div>
        {this.renderIndicator()}
  		</div>
    );
	}
}

function padString (str) {
  return ('00' + str).substr(-2, 2);
}

export default NavIndicator;