import React, { Component } from "react";
import TopicBlock from "../components/topics/topicBlock";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import VideoList from "../components/videoList";
import VideoPlayer from "../components/videoPlayer";
import topics from "../topics.json";
import axios from "axios";
import ArticlesRender from '../components/articleRender';

const YT_API = "AIzaSyBjig4d5vLFZSGZIgL0T2CktcYI5izgPgY";

class Topics extends Component {
  // Setting this.state.topics to the topics json array
  state = {
    topics,
    videos: [],
    selectedVideo: null,
    articles: [],
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
  renderArticles(title) {

    const KEY = "18a8835c27f54f6b9779354605f40a30";
    let url = `https://newsapi.org/v2/everything?q=${title}&sortBy=relevancy&pageSize=5&apiKey=${KEY}`;

    axios.get(url)
      .then((result) => {
        this.setState({
          articles: result.data.articles
        });
      });
  }
  
  
  handleBlockClick = (searchTitle,id) => {
    console.log("This block clicked: " + searchTitle + " " + id);
    this.searchYoutube(searchTitle);
    this.renderArticles(searchTitle);


  };
  render() {
    return (
      <div>
      
      <header className="masthead mb-auto">
        <div className="inner">
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link active" href="/topics">Topics</a>
            <a className="nav-link" href="/login">Login / Sign Up</a>
          </nav>
        </div>
      </header>
      
      <section id="team" className="pb-5">
        <div className="container">
            <h1 className="section-title h1">TOPICS</h1>
            <div className="row">
        {this.state.topics.map(topics => (
          <TopicBlock
          key={topics.id}
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
          
          
        <section id="team" className="pb-5">
        <div className="container">
            <h1 className="section-title h1">VIDEOS</h1>
            <div className="row">
            {/* <VideoPlayer video={this.state.selectedVideo} /> */}
            {/* <VideoList
              onVideoSelect={selectedVideo => {
                this.setState({ selectedVideo });
              }}
              videos={this.state.videos}
            /> */}
          </div>
        </div>
        </section>
        <section id="team" className="pb-5">
        <div className="container">
            <h1 className="section-title h1">Articles</h1>
            <div className="row">
            <ArticlesRender articles={this.state.articles} />
            
          </div>
        </div>
        </section>
        </div>
    )
  }
}

export default Topics;
