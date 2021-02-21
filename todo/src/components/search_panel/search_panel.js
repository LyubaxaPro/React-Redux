import React, { Component } from 'react';
import './search_panel.css';

export default class SearchPanel extends Component{

  state = {
    label: ''
  };

  OnLabelChange = (e) => {
      this.setState({
          label: e.target.value
      });
  };

  onSubmit = (e) => {
      e.preventDefault();
      let search_data = [];
      for (let item of this.props.todos){
        search_data.push(item.label.indexOf(this.state.label) === 0);
      }
     // const search_data = this.props.todos.map((item) => {item.indexOf(this.state.label) === 0});
      this.props.onDraw(search_data);
      this.setState({
          label: ''
      });
  };


  render(){
    return (
      <form className="d-flex"
      onSubmit={this.onSubmit}>

      <input type="text"
                className="form-control search-input"
                onChange={this.OnLabelChange}
                placeholder="type to search"
                value={this.state.label} />
      </form>
    )
  }
}