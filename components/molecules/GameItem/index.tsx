import Link from "next/link";

interface GameItemProps {
  title: string;
  tile: string;
  id: string;
}
export default function GameItem(props: GameItemProps) {
  const { title, tile, id } = props;
  return (
    <div className="col-lg-3 featured-game mb-30" data-aos="fade-up">
      <div className="card featured-game-card">
        <img src={`${tile}`} alt="..." className="img-game" />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <Link href={`/detail/${id}`}>
            <a className="btn btn-top-up rounded-pill px-5">Top Up</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
