import React, { Component } from "react";
import NavBar from "./components/navBar";
import TopicBlock from "./components/topics/topicBlock";
import Footer from "./components/footer";
import topics from "./topics.json";

class Topics extends Component {
  // Setting this.state.topics to the topics json array
  state = {
    topics
  };

  render() {
    return (
      <div>
        <NavBar />
        <Title>Topics</Title>
        {this.state.topics.map(topics => (
          <TopicBlock
            id={topics.id}
            title={topics.title}
            image={topics.image}
            frontText={topics.frontText}
            backText={topics.backText}
          />
        ))}
        <Footer />
      </div>
    );
  }
}

export default Topics;
