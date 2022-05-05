import { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { TodoItem } from "../../components/todo/TodoItem";
import { TodoItemCreator } from "../../components/todo/TodoItemCreator";
import { todoListState } from "./state";

const Todo: NextPage = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <h1>TODO LIST</h1>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};
export default Todo;
