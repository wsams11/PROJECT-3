import React from 'react';
import "./style.css";

const Main = (props) => {
  return (
    <body className="text-center">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div class="inner">
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="../topicspage/topics.html">Topics</a>
            <a className="nav-link" href="#">Login / Sign Up</a>
          </nav>
        </div>
      </header>
    
      <main role="main" className="inner cover">
        <h1 className="cover-heading">TRANSITIONS</h1>
        <p className="lead">The helpful guide to becoming an effective adult. </p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary" style="background-color:transparent">Sign Up!</a>
        </p>
      </main>
    
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>App Created by Jacob Lara, Richard K, William Sams III</p>
        </div>
      </footer>
    </div>
    </body>
  );
}

export default Main;