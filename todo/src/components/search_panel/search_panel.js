import React, { Component } from 'react';
import './search_panel.css';

export default class SearchPanel extends Component{

  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  };
  render(){
    return (
      <form className="d-flex"
      onSubmit={this.onSubmit}>

      <input type="text"
                className="form-control search-input"
                placeholder="type to search" 
                value={this.state.term}
                onChange={this.onSearchChange}/>
      </form>
    )
  }
}