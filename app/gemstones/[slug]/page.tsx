import { notFound } from 'next/navigation';
import ArticleShell from '@/components/ArticleShell';
import { articles, getArticle } from '@/data/articles';

export function generateStaticParams(){
  return articles.map((article)=>({slug: article.slug}));
}

export function generateMetadata({params}:{params:{slug:string}}){
  const article = getArticle(params.slug);
  if(!article) return {};
  return {
    title: `${article.title} | GemAtlas.org`,
    description: article.dek,
  };
}

export default function Page({params}:{params:{slug:string}}){
  const article = getArticle(params.slug);
  if(!article) notFound();
  return <ArticleShell article={article}/>;
}
