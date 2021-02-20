import React, { Component } from 'react';

import './item_status_filter.css';

export default class ItemStatusFilter extends Component {

  onDoneButtonClicked = () => {
    const {todos, onDraw } = this.props;
    const done_data = todos.map(item => item.done);
    onDraw(done_data);
  }

  onActiveButtonClicked = () => {
    const {todos, onDraw } = this.props;
    const done_data = todos.map(item => !item.done);
    onDraw(done_data);
  }

  onAllButtonClicked = () => {
    const {todos, onDraw } = this.props;
    const done_data = todos.map(item => true);
    onDraw(done_data);
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