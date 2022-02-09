import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import ArticleItem from "../../components/molecules/ArticleItem";
import Footer from "../../components/organism/Footer";
import Navbar from "../../components/organism/Navbar";
import { ArticleItemTypes } from "../../services/data-type";
import { getArcticle } from "../../services/player";

export default function Article() {
  const [articleList, setArticleList] = useState([]);

  const getArticleList = useCallback(async () => {
    const data = await getArcticle();
    setArticleList(data);
  }, [getArcticle]);

  useEffect(() => {
    getArticleList();
  }, []);
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <>
      <Head>
        <title>Youpay | Article</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar article />
      <div className="container-fluid">
        <div className="row">
          {articleList.map((item: ArticleItemTypes) => (
            <ArticleItem
              key={item._id}
              judul={item.judul}
              excrept={item.excrept}
              image={`${API_IMG}/${item.image}`}
              id={item._id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
