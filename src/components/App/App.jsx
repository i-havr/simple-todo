import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/todosSlice";

import TodoList from "../TodosList/TodosList";
import InputField from "../../components/InputField/InputField";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
