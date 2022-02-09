import Head from "next/head";
import SideBar from "../../../components/organism/SideBar";
import TransactionContent from "../../../components/organism/TransactionContent";

export default function Transactions() {
  return (
    <>
      <Head>
        <title>Youpay | Member Transactions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContent />
      </section>
    </>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
