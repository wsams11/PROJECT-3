import React from 'react';

const NavBar = (props) => {
  return (
    <header className="masthead mb-auto">
    <div className="inner">
      <nav className="nav nav-masthead justify-content-center">
        <a className="nav-link active" href="#">Home</a>
        <a className="nav-link" href="#">Topics</a>
        <a className="nav-link" href="#">Login / Sign Up</a>
      </nav>
    </div>
  </header>
  );
}

export default NavBar;