import React from 'react';
import axios from "axios";
import ArticlesRender from './articleRender';

export default class Article extends React.Component {

  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  renderArticles(topic) {

    const KEY = "18a8835c27f54f6b9779354605f40a30";
    let url = `https://newsapi.org/v2/everything?q=${topic}&sortBy=relevancy&pageSize=5&apiKey=${KEY}`;

    axios.get(url)
      .then((result) => {
        this.setState({
          articles: result.data.articles
        });
      });
  }

  // componentDidMount() {
  //   this.renderArticles(this.props.params.topic);
  //   console.log(this.props.params.topic);
  // };
  // componentWillReceiveProps(nextProps) {
  //   this.renderArticles(nextProps.params.topic);
  // }

  render() {
    return (
      <ArticlesRender articles={this.state.articles} />
    );
  }
}

