import { atom, selector } from "recoil";
import axios from "axios";

type ZennTrendsType = {
  id: number;
  postType: string;
  title: string;
  slug: string;
  published: boolean;
  commentsCount: number;
  likedCount: number;
  bodyLettersCount: number;
  readingTime: number;
  articleType: string;
  emoji: string;
  isSuspendingPrivate: boolean;
  publishedAt: string;
  bodyUpdatedAt: string | null;
  sourceRepoUpdatedAt: string;
  user: {
    id: number;
    username: string;
    name: string;
    avatarSmallUrl: string;
  };
  publication: string | null;
};

// const zennTrendsState = atom<ZennTrendsType[]>({
//   key: "ZennTrendsState",
//   default: [],
// });

export const zennTrendsSelector = selector<ZennTrendsType[]>({
  key: "ZennTrendsSelector",
  get: async () => {
    const { data } = await axios.get(
      "https://zenn-api.vercel.app/api/trendTech"
    );
    return await data;
  },
});
