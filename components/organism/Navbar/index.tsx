import Image from "next/image";
import Menu from "./Menu";
import ToogleButton from "./ToogleButton";

interface TitleProps {
  home?: boolean;
  games?: boolean;
  article?: boolean;
  about?: boolean;
}

export default function Navbar(props: Partial<TitleProps>) {
  const { home, games, article, about } = props;
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light pt-lg-40 pb-lg-40 pt-30 pb-50">
        <hr />
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image
              src="/icon/youpay1-02.jpg"
              width={70}
              height={70}
              className="rounded-circle"
            />
          </a>
          <p className="logo-brand">YouPay</p>
          <ToogleButton />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active={home} />
              <Menu title="Games" active={games} href="/" />
              <Menu title="Articles" active={article} href="/articles" />
              <Menu title="About Us" active={about} href="/about" />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
