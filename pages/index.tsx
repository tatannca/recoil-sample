import { css } from "@emotion/css";
import { NextPage } from "next";
import { CharacterCounter } from "../components/CharacterCounter";
import { TextInput } from "../components/TextInput";

const Title = css`
  text-align: center;
`;

const Home: NextPage = () => {
  return (
    <div className={Title}>
      <h1>Character Counter</h1>
      <TextInput />
      <CharacterCounter />
    </div>
  );
};

export default Home;
