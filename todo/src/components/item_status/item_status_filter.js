import React, { Component } from 'react';

import './item_status_filter.css';

export default class ItemStatusFilter extends Component {

  onDoneButtonClicked = () => {
    const done_data = this.props.todos.map(item => item.done);
    this.props.onDraw(done_data);
  }

  onActiveButtonClicked = () => {
    const done_data = this.props.todos.map(item => !item.done);
    this.props.onDraw(done_data);
  }

  onAllButtonClicked = () => {
    const done_data = this.props.todos.map(item => true);
    this.props.onDraw(done_data);
  }

  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={this.onAllButtonClicked}>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.onActiveButtonClicked}>
                Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.onDoneButtonClicked}>
                Done</button>
      </div>
    );
  }
}