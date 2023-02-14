type Card = {
  word: string;
  description: string;
};

type Cards = Card[];

type Settings = {
  teams: string[];
  timer: number;
  allowSkips: boolean;
  cardCount: number;
  cardType: string;
  cardText: string;
};

type GameContext = {
  settings: Settings;
  screen: string;
  setSettings: Dispatch<SetStateAction<Settings>>;
  setScreen: Dispatch<SetStateAction<string>>;
  wikiData: null | Article[];
};

type Team = {
  team: string;
  score: number;
};

type Teams = Team[];

type PageviewData = {
  items: {
    articles: {
      article: string;
    }[];
  }[];
};

type ArticleData = {
  query: {
    pages: Article[];
  };
};

type Article = {
  pageid: number;
  ns: number;
  title: string;
  extract: string;
  terms?: {
    alias?: string[];
    description?: string[];
    label?: string[];
  };
};
