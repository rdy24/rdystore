import jwtDecode from "jwt-decode";
import Head from "next/head";
import TransactionDetailContent from "../../../components/organism/TransactionDetailContent";
import {
  UserTypes,
  JWTPayloadTypes,
  HistoryTransactionTypes,
} from "../../../services/data-type/index";
import { getTransactionDetail } from "../../../services/member";

interface TranscationsDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function TransactionsDetail(props: TranscationsDetailProps) {
  const { transactionDetail } = props;
  return (
    <>
      <Head>
        <title>Youpay | Transactions Details</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent data={transactionDetail} />
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
  params: {
    id: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { id } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getTransactionDetail(id, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
