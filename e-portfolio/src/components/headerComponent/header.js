import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

      <div className="logo">
      INSERT LOGO HERE
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>


      </header>
    );
  }
}

export default Header;