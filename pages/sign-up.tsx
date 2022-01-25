import Image from "next/image";
import Link from "next/link";
import SignUpForm from "../components/organism/SignUpForm";

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link href="/">
              <a className="navbar-brand">
                <Image
                  src="/icon/youpay1-02.jpg"
                  width={100}
                  height={100}
                  className="rounded-circle"
                />
              </a>
            </Link>
          </div>
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
          <p className="text-lg color-palette-1 m-0">
            Daftar dan bergabung dengan kami
          </p>
          <SignUpForm />
          <div className="button-group d-flex flex-column mx-auto pt-50">
            <Link href="/sign-up-photo">
              <a
                className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                role="button"
              >
                Continue
              </a>
            </Link>
            <Link href="/sign-in">
              <a
                className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
                role="button"
              >
                Sign In
              </a>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
