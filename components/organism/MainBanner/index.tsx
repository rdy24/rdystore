export default function MainBanner() {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <div className="col-lg-6 col-12 my-auto">
            <h1 className="header-title color-palette-1 fw-bold">
              Top up & Be <span className="d-sm-inline d-none">a</span>
              <span> Winner</span> <br className="d-sm-block d-none" /> in every
              Game
            </h1>
            <p className="mt-25 mb-40 text-lg color-palette-1">
              Top up aman dan nyaman
              <br className="d-md-block d-none" />
              Hanya di YouPay.id
            </p>
            <div className="d-flex flex-lg-row flex-column gap-4">
              <a
                className="btn btn-get text-lg rounded-pill"
                href="#feature"
                role="button"
              >
                Get Started
              </a>
              <a
                className="btn-learn text-lg color-palette-1 my-auto text-center"
                href="/games"
                role="button"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-lg-block d-none">
            <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
              <div className="position-relative" data-aos="zoom-in">
                <img src="./img/Header-1.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
