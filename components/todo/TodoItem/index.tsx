import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import type { todoListStateType } from "../../../pages/todo/state";
import { todoListState } from "../../../pages/todo/state";

const replaceItemAtIndex = <T extends todoListStateType>(
  arr: T[],
  index: number,
  newValue: T
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};
const removeItemAtIndex = (arr: todoListStateType[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

type TodoItemProps = {
  item: todoListStateType;
};

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
