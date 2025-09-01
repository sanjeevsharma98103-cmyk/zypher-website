import React from "react";
function Services() {

return(

    <div>
<div class="breadcrumb-section"><div class="container"><div class="row"><div class="col-lg-12"><div class="breadcrumb-text mt-2"><h2>our Services</h2>
</div></div></div></div></div>

  {/* Service Start */}
<div id="services" className="container-fluid services">
        <div className="container">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            {/* <h4 className="text-primary">Our Services</h4> */}
            <h1 className="display-4 mb-4">We Build & Grow Digital Products</h1>
            <p className="mb-0">
              From MVPs to full-scale platforms — we design, develop, and optimize for growth.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/web.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Custom Web Development"
                    loading="lazy"
                  />
                  <div className="service-icon p-3">
                    <i className="fas fa-code fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <span className="d-inline-block h4 mb-4">Custom Web Development</span>
                    <p className="mb-4">
                      React, Node.js, Next.js — scalable frontends & APIs tailored to your needs.
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#contact">
                      Start a Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/e-commerce.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="E-commerce Development"
                    loading="lazy"
                  />
                  <div className="service-icon p-3">
                    <i className="fas fa-shopping-cart fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <span className="d-inline-block h4 mb-4">E-commerce Development</span>
                    <p className="mb-4">
                      Shopify, WooCommerce or custom builds with smooth UX and secure payments.
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#contact">
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/branding.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Logo & Branding"
                    loading="lazy"
                  />
                  <div className="service-icon p-3">
                    <i className="fas fa-paint-brush fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <span className="d-inline-block h4 mb-4">Logo designing & Branding</span>
                    <p className="mb-4">
                      Memorable identities, brand guides, and marketing assets that convert.
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#contact">
                      See Branding
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/seo.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="SEO & Digital Marketing"
                    loading="lazy"
                  />
                  <div className="service-icon p-3">
                    <i className="fas fa-search fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <span className="d-inline-block h4 mb-4">SEO & Digital Marketing</span>
                    <p className="mb-4">
                      Technical SEO, on-page optimization, and content plans for steady growth.
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#contact">
                      Grow Traffic
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
              <a className="btn btn-primary rounded-pill py-3 px-5 mb-5" href="#contact">
                Tell Us About Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
  {/* Service End */}

    </div>
)


}
export default Services