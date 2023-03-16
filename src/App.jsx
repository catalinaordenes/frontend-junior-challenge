import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TodoForm from "components/TodoForm";
import "./App.css";
import TodoListItem from "components/TodoListItem";

const App = () => {
  return (
    <div className="root">
      <TodoForm/>
      <TodoList />
      <TodoResults />
     
    </div>
  );
};

export default App;
