import React, { Component } from "react";
import TopicBlock from "../components/topics/topicBlock";
import topics from "../topics.json";

class Topics extends Component {
  // Setting this.state.topics to the topics json array
  state = {
    topics
  };

  render() {
    return (
      <div >
      
      <header className="masthead mb-auto">
        <div className="inner">
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="/topics">Topics</a>
            <a className="nav-link" href="#">Login / Sign Up</a>
          </nav>
        </div>
      </header>
      
      <section id="team" class="pb-5">
        <div class="container">
            <h1 class="section-title h1">TOPICS</h1>
            <div class="row">
        {this.state.topics.map(topics => (
          <TopicBlock
          id={topics.id}
          title={topics.title}
          image={topics.image}
          frontText={topics.frontText}
          backText={topics.backText}
          />
          ))}
      </div>
      </div>
        </section>
          </div>
    )
  }
}

export default Topics;
