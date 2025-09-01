import React from "react";

function About() {
  return(

<div>
<div class="breadcrumb-section"><div class="container"><div class="row"><div class="col-lg-12"><div class="breadcrumb-text"><h2>About Us</h2>
</div></div></div></div></div>
 {/* About Start */}
<div id="about" className="container-fluid bg-light about pb-5">
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-content bg-white rounded p-5 h-100">
                <h4 className="text-primary">About Codezypher</h4>
                <h1 className="display-4 mb-4">
                  We Help Businesses Go Digital
                </h1>
                <p>
                  We’re a Canada-based IT agency building high-quality web apps, e-commerce
                  stores, and brand experiences. Our work combines performance, design, and SEO.
                </p>
                <p>
                  Whether you’re launching an MVP or leveling up an existing product — we’ve got you.
                </p>
                <p className="text-dark">
                  <i className="fa fa-check text-primary me-3" />
                  Clean, modern UI/UX
                </p>
                <p className="text-dark">
                  <i className="fa fa-check text-primary me-3" />
                  Secure & scalable architectures
                </p>
                <p className="text-dark mb-4">
                  <i className="fa fa-check text-primary me-3" />
                  SEO-friendly by default
                </p>
                <a className="btn btn-primary rounded-pill py-3 px-5" href="#contact">
                  More Information
                </a>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-white rounded p-5 h-100">
                <div className="row g-4 justify-content-center">
                  <div className="col-12">
                    <div className="rounded bg-light">
                      <img
                        src="img/aboutus.jpg"
                        className="img-fluid rounded w-100"
                        alt="Design and development at Codezypher"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span className="text-primary fs-2 fw-bold">20</span>
                        <span className="h1 fw-bold text-primary">+</span>
                      </div>
                      <h4 className="mb-0 text-dark">Projects Delivered</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span className="text-primary fs-2 fw-bold">10</span>
                        <span className="h1 fw-bold text-primary">+</span>
                      </div>
                      <h4 className="mb-0 text-dark">Happy Clients</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span className="text-primary fs-2 fw-bold">5</span>
                        <span className="h1 fw-bold text-primary">+</span>
                      </div>
                      <h4 className="mb-0 text-dark">Years Combined Exp.</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span className="text-primary fs-2 fw-bold">100</span>
                        <span className="h1 fw-bold text-primary">%</span>
                      </div>
                      <h4 className="mb-0 text-dark">Commitment to Quality</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  {/* About End */}

</div>


  ) 
}

export default About