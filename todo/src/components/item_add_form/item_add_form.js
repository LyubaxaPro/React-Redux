import React, { Component } from 'react';
import './item_add_form.css'

export default class ItemAddForm extends Component{

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
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        });
    };

    onAddButtonClicked = () => {
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
            <input type="text"
            className="form-control"
            onChange={this.OnLabelChange}
            placeholder="What needs to be done"
            value={this.state.label} />
            <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.onAddButtonClicked}>
                Add
            </button>
            </form>
        )
    }
}