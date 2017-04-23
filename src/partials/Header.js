import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import contact from '../../data/contact.json';

const Header = () => (
  <header className="App-header">
    <div className="App-header-top">
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