import { useCallback, useEffect, useState } from "react";
import { getFeaturedGame } from "../../../services/player";
import GameItem from "../../molecules/GameItem";
import { GameItemTypes } from "../../../services/data-type";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeatureGameList();
  }, []);
  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Produk terbaru kami
        </h2>
        <div className="row game-item" data-aos="fade-up">
          {gameList.map((item: GameItemTypes) => (
            <GameItem
              key={item.product._id}
              title={item.product.game}
              tile={`${API_IMG}/${item.product.icon}`}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
