import { ChangeEvent, FC, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../../pages/todo/state";

let id = 0;
const getId = () => id++;

export const TodoItemCreator: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
