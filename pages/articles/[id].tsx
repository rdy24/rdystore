import Head from "next/head";
import Footer from "../../components/organism/Footer";
import Navbar from "../../components/organism/Navbar";
import { getArcticle, getDetailArticle } from "../../services/player";
import { ArticleItemTypes } from "../../services/data-type/index";

interface DetailProps {
  dataArticle: ArticleItemTypes;
}

export default function detail({ dataArticle }: DetailProps) {
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <>
      <Head>
        <title>Youpay | Detail Article</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar article />
      <div className="container">
        <div className="row">
          <div className="col-lg text-center">
            <h2 className="mb-3">{dataArticle.judul}</h2>
            <img
              src={`${API_IMG}/${dataArticle.image}`}
              width={300}
              className="align-items-center text-center"
              alt="gambar"
            />
            <div
              className="text-start text-lg mt-3"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: dataArticle.body }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const data = await getArcticle();
  const paths = data.map((item: ArticleItemTypes) => ({
    params: {
      id: item._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailArticle(id);
  return {
    props: {
      dataArticle: data,
    },
  };
}
