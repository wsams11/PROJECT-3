import React from 'react';

export default class ArticlesRender extends React.Component {
  render() {
    return (
      <div className="articles col-lg-8">
        <h3>Articles</h3>
        <div className="row">
          {this.props.articles.map((articles, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card-block" style={{ height: '380' }}>
                <img className="card-text" src={articles.urlToImage} style={{ width: '250', height: '250' }} />
                <a className="card-footer" href={articles.url} target="_blank">{articles.title}</a>
              </div>
            </div>
          ))
          }
        </div>
      </div >
    );
  }
}
