import Link from "next/link";
import { FC } from "react";

export const Menu: FC = () => {
  return (
    <div>
      <h1>Recoil tutorial</h1>
      <ul>
        <li>
          <Link href="/">top</Link>
        </li>
        <li>
          <Link href="/todo">todo</Link>
        </li>
        <li>
          <Link href="/trends">zenn trends</Link>
        </li>
      </ul>
    </div>
  );
};
