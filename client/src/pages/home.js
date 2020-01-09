import React from "react";
import "../components/main/cover.css";


function Home() {
  return (
   
      
    
    <div className="cover-container d-flex mx-auto h-100 flex-column text-center">
      <header className="masthead mb-auto">
        <div className="inner">
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="/topics">Topics</a>
            <a className="nav-link" href="/login">Login / Sign Up</a>
          </nav>
        </div>
      </header>
      

      <main role="main" className="inner cover">
        <h1 className="cover-heading">TRANSITIONS</h1>
        <p className="lead">
          The helpful guide to becoming an effective adult.{" "}
        </p>
        <p className="lead">
          <a href="/login" className="btn btn-lg btn-secondary">
            Sign Up!
          </a>
        </p>
      </main>

      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>App Created by Jacob Lara, Richard Klevan, William Sams III</p>
        </div>
      </footer>
    </div>
   
  );
}

export default Home;
