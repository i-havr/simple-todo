import { useSelector } from "react-redux";
import TodoListItem from "../TodosListItem/TodosListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
