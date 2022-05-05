import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";
import { textState } from "../../pages/state";

export const TextInput: FC = () => {
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>Echo: {text}</div>
    </div>
  );
};
