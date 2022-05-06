import { NextPage } from "next";
import React, { Suspense, FC } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { Menu } from "../../components/Menu";
import { zennTrendsSelector } from "../../state/trends/state";

const Trends: NextPage = () => {
  return (
    <div>
      <Menu />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <DataList />
      {/* </Suspense> */}
    </div>
  );
};
export default Trends;

const DataList: FC = () => {
  // 参考：Recoilで非同期データを扱う[Suspense, Loadable]
  // https://zenn.dev/riemonyamada/articles/30429b0ebb2349
  // const zenn = useRecoilValue(zennTrendsSelector);
  const { state, contents } = useRecoilValueLoadable(zennTrendsSelector);

  if (state === "loading") return <div>Loading...</div>;
  if (state === "hasError") return <div>Fetch Error</div>;

  return (
    <div>
      <h2>Zenn trends list</h2>
      {contents.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
