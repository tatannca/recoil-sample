import { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { Menu } from "../../components/Menu";
import { TodoItem } from "../../components/todo/TodoItem";
import { TodoItemCreator } from "../../components/todo/TodoItemCreator";
import { TodoListFilters } from "../../components/todo/TodoListFilters";
import { TodoListStats } from "../../components/todo/TodoListStats";
import { filteredTodoListState, todoListState } from "../../state/todo/state";

const Todo: NextPage = () => {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <Menu />
      <h2>Todo List</h2>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};
export default Todo;
