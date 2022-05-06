import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import {
  todoListFilterState,
  todoListFilterType,
} from "../../../state/todo/state";

export const TodoListFilters: FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => setFilter(value as todoListFilterType);

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
