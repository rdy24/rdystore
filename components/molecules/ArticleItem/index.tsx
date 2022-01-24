import Link from "next/link";

interface ArticleItemProps {
  judul: string;
  excrept: string;
  image: string;
  id: string;
}

export default function ArticleItem(props: ArticleItemProps) {
  const { judul, excrept, image, id } = props;
  return (
    <div className="col-lg-4 mt-5">
      <div className="card featured-game-card">
        <img src={`${image}`} className="card-img-top" alt="..." height={200} />
        <div className="card-body">
          <h5 className="card-title">{judul}</h5>
          <p className="card-text">{excrept}</p>
          <Link href={`/articles/${id}`}>
            <a className="btn btn-primary">Detail</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
