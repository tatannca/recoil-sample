import { css } from "@emotion/css";
import { NextPage } from "next";
import { CharacterCounter } from "../components/CharacterCounter";
import { Menu } from "../components/Menu";
import { TextInput } from "../components/TextInput";

const Home: NextPage = () => {
  return (
    <div>
      <Menu />
      <h2>Character Counter</h2>
      <TextInput />
      <CharacterCounter />
    </div>
  );
};

export default Home;
