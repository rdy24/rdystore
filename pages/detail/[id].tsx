import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/organism/Navbar";
import Footer from "../../components/organism/Footer";
import { getDetailGame, getFeaturedGame } from "../../services/player";
import TopUpItem from "../../components/organism/TopUpItem";
import TopUpForm from "../../components/organism/TopUpForm";
import {
  NominalItemTypes,
  GameItemTypes,
  PaymentItemTypes,
} from "../../services/data-type/index";

interface DetailProps {
  dataItem: GameItemTypes;
  nominals: NominalItemTypes[];
  payments: PaymentItemTypes[];
}

export default function Detail({ dataItem, nominals, payments }: DetailProps) {
  useEffect(() => {
    localStorage.setItem("data-item", JSON.stringify(dataItem));
  }, []);
  return (
    <>
      <Head>
        <title>Youpay | Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar games />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem type="mobile" data={dataItem} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" data={dataItem} />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export async function getStaticPaths() {
  const data = await getFeaturedGame();
  const paths = data.map((item: GameItemTypes) => ({
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
  const data = await getDetailGame(id);
  return {
    props: {
      dataItem: data.detail,
      nominals: data.detail.nominals,
      payments: data.payment,
    },
  };
}
