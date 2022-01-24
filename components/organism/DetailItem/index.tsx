import Image from "next/image";

interface DetailItemProps {
  data: {
    title: string;
    backdrop: string;
    description: string;
    product: {
      game: string;
    };
  };
}

export default function DetailItem(props: DetailItemProps) {
  const { data } = props;
  const ROOT_IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <>
      <Image
        src={`${ROOT_IMG}/${data.backdrop}`}
        width={500}
        height={300}
        alt=""
      />
      <h2 className="text-4xl fw-bold color-palette-1 text-center mt-10">
        {data.product.game}
      </h2>
      <hr />
      <div
        className="text-start text-lg mt-10"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />

      <hr />
    </>
  );
}
