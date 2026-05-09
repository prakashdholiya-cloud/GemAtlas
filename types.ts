export type Fact = { label: string; value: string };
export type TocItem = { id: string; label: string };
export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  image?: { title: string; caption: string };
  bullets?: string[];
};
export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  updated: string;
  readingTime: string;
  heroImage: { title: string; caption: string };
  facts: Fact[];
  sections: ArticleSection[];
  related: { title: string; href: string; description: string }[];
  sources: { label: string; href: string }[];
};
