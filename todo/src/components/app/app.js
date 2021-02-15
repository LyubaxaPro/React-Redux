import AppHeader from '../app_header/app_header';
import SearchPanel from '../search_panel/search_panel';
import TodoList from '../todo_list/todo_list';
import ItemStatusFilter from '../item_status/item_status_filter';

import './app.css';

const App = () => {

  const todoDate = [
    { label: 'Drink Coffee', important:false, id: 1 },
    { label: 'Make App', important:true, id: 2 },
    { label: 'Have a lunch', important:false, id: 3 }
  ];
  return(
    <div className = "todo-app">
      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
      <SearchPanel />
      <ItemStatusFilter/>
      </div>

      <TodoList todos={ todoDate }/>
  </div>
  );
} 

export default App;