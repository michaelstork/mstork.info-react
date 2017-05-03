import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import contact from '../../data/contact.json';

const Header = (props) => (
  <header className="App-header">
    <div className="App-header-top">
      <svg onClick={props.toggleMenu}
        className="Menu-target"
        x="0px" y="0px"
        viewBox="0 0 50 50">
        <g>
          <line x1="0" y1="0" x2="50" y2="50" />
          <line x1="0" y1="24" x2="50" y2="24" />
          <line x1="50" y1="0" x2="0" y2="50" />
        </g>
      </svg>
      <h1>
        <Link to="/">
          <span className="name">{contact.name}</span>
          <span className="title">{contact.title}</span>
        </Link>
      </h1>
      <div className="App-header-contact-info">
        <a className="email">
          <i className="mdi mdi-email"></i>
          <span>{contact.email}</span>
        </a>
        <a className="phone">
          <i className="mdi mdi-cellphone-iphone"></i>
          <span>{contact.phone}</span>
        </a>
      </div>
    </div>
  </header>
  )

export default Header;