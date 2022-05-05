import { FC } from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../../pages/state";

export const CharacterCounter: FC = () => {
  const count = useRecoilValue(charCountState);

  return <div>Character Count: {count}</div>;
};
