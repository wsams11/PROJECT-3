import React from './node_modules/react';

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <h1 id="site-title">{props.siteTitle}</h1>
    </div>
  );
}

export default NavBar;