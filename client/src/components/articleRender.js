import React from 'react';

export default class ArticlesRender extends React.Component {
  render() {
    return (
      <div className="articles col ">
        <div className="row">
          {this.props.articles.map((articles, index) => (
            <div className="col-lg-4 " key={index}>
              <div className="acard-block">
                <img className="acard-text" src={articles.urlToImage} alt={ "article" } />
                <div className="row">
                <a className="acard-footer" href={articles.url} target="_blank" rel="noopener noreferrer">{articles.title}</a>
              </div>
              </div>
            </div>
          ))
          }
        </div>
      </div >
    );
  }
}
