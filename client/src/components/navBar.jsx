import React from 'react';

const NavBar = (props) => {
  return (
    <header class="masthead mb-auto">
    <div class="inner">
      <nav class="nav nav-masthead justify-content-center">
        <a class="nav-link active" href="/">Home</a>
        <a class="nav-link" href="/topics">Topics</a>
        <a class="nav-link" href="/login">Login / Sign Up</a>
      </nav>
    </div>
  </header>
  );
}

export default NavBar;