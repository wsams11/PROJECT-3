import React from 'react';
import "./style.css";

const main = (props) => {
  return (
    <body class="text-center">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Home</a>
            <a class="nav-link" href="../topicspage/topics.html">Topics</a>
            <a class="nav-link" href="#">Login / Sign Up</a>
          </nav>
        </div>
      </header>
    
      <main role="main" class="inner cover">
        <h1 class="cover-heading">TRANSITIONS</h1>
        <p class="lead">The helpful guide to becoming an effective adult. </p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary" style="background-color:transparent">Sign Up!</a>
        </p>
      </main>
    
      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>App Created by Jacob Lara, Richard K, William Sams III</p>
        </div>
      </footer>
    </div>
    </body>
  );
}

export default NavBar;