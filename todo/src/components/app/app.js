import React, { Component } from 'react';

import AppHeader from '../app_header/app_header';
import SearchPanel from '../search_panel/search_panel';
import TodoList from '../todo_list/todo_list';
import ItemStatusFilter from '../item_status/item_status_filter';
import ItemAddForm from '../item_add_form/item_add_form';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false, 
      done: false,
      id: this.maxId++,
      draw_now: true
    };
  }

  deleteItem = (id) => {
    this.setState(( { todoData } ) => {
      const idx = todoData.findIndex((el) => el.id === id);
      // при таком подходе уже существующий массив меняется, что не хорошо
      // todoData.splice(idx, 1);

      const newArray = [
        ...todoData.slice(0, idx),
         ...todoData.slice(idx+1)
        ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(( { todoData } ) => {
      const newArray = [
        ...todoData,
         newItem
        ];

      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem, 
      [propName]: !oldItem[propName]};
    
    return [
      ...arr.slice(0, idx), newItem,
        ...arr.slice(idx+1)
      ];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
      todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
      todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };
  
  onToggleDraw = (draw_arr) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.slice();
      for (let i in newTodoData){
        newTodoData[i].draw_now = draw_arr[i];
      }

      return {
        todoData : newTodoData
      };
    });
  };

  render(){

    const { todoData } = this.state;

    const doneCount = todoData.filter((el) => el.done ).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter todos={todoData}
          onDraw={this.onToggleDraw} />
        </div>
  
        <TodoList 
          todos={todoData} 
          onDeleted={ this.deleteItem }
          onToggleImportant= { this.onToggleImportant}
          onToggleDone={ this.onToggleDone}/>

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
