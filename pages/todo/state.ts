import { atom, selector } from "recoil";

export type todoListStateType = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<todoListStateType[]>({
  key: "TodoList",
  default: [],
});

export type todoListFilterType =
  | "Show All"
  | "Show Completed"
  | "Show Uncompleted";

export const todoListFilterState = atom<todoListFilterType>({
  key: "TodoListFilter",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
