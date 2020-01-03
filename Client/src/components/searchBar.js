import React, { Component } from './node_modules/react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term: term });
    this.props.onChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onClick={(event) => {
            this.onInputChange(event.target.value)
          }}
          placeholder='Search Video'
        />
      </div>
    );
  }
}

export default SearchBar;