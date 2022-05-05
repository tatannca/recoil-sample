import { atom } from "recoil";

export type todoListStateType = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<todoListStateType[]>({
  key: "TodoList",
  default: [],
});
