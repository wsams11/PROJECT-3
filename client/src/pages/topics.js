import React, { Component } from "react";
import TopicBlock from "../components/topics/topicBlock";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import VideoList from "../components/videoList";
import VideoPlayer from "../components/videoPlayer";
import topics from "../topics.json";

const YT_API = "AIzaSyBjig4d5vLFZSGZIgL0T2CktcYI5izgPgY";

class Topics extends Component {
  // Setting this.state.topics to the topics json array
  state = {
    topics,
    videos: [],
    selectedVideo: null
  };

  
  videoSearch = _.debounce(term => {
    this.searchYoutube(term);
  }, 300);
  
  searchYoutube = term => {
    YTSearch({ key: YT_API, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };
  
  
  handleBlockClick = (title,id) => {
    console.log("This block clicked: " + title + " " + id);
    this.searchYoutube(title);


  };
  render() {
    return (
      <div >
      
      <header className="masthead mb-auto">
        <div className="inner">
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link active" href="/topics">Topics</a>
            <a className="nav-link" href="/login">Login / Sign Up</a>
          </nav>
        </div>
      </header>
      
      <section id="team" class="pb-5">
        <div class="container">
            <h1 class="section-title h1">TOPICS</h1>
            <div class="row">
        {this.state.topics.map(topics => (
          <TopicBlock
          handleBlockClick={this.handleBlockClick}
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
          
          
          <div className="container">
            
            <VideoPlayer video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => {
                this.setState({ selectedVideo });
              }}
              videos={this.state.videos}
            />
          </div>
        </div>
    )
  }
}

export default Topics;
