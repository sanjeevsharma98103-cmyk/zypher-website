import React from "react";
function Contact() {

return(

<div>
<div className="container-fluid contact bg-light py-5">
  <div className="container py-3">
    <div
      className="text-center mx-auto pb-5 wow fadeInUp"
      data-wow-delay="0.2s"
      style={{
        maxWidth: 800,
        visibility: "visible",
        animationDelay: "0.2s",
        animationName: "fadeInUp"
      }}
    >
      <h4 className="text-primary">Contact Us</h4>
      <h1 className="display-4 mb-4">
        If you have any comments please apply now
      </h1>
    </div>
    <div className="row g-5">
      <div
        className="col-xl-6 wow fadeInLeft"
        data-wow-delay="0.2s"
        style={{
          visibility: "visible",
          animationDelay: "0.2s",
          animationName: "fadeInLeft"
        }}
      >
        <div className="contact-img d-flex justify-content-center">
          <div className="contact-img-inner">
            <img
              src="img/enquiry.png"
              className="img-fluid w-100"
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div
        className="col-xl-6 wow fadeInRight"
        data-wow-delay="0.4s"
        style={{
          visibility: "visible",
          animationDelay: "0.4s",
          animationName: "fadeInRight"
        }}
      >
        <div>
          <h4 className="text-primary">Send Your Message</h4>
          {/* <p className="mb-4">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax &amp; PHP in a few minutes. Just copy and
            paste the files, add a little code and you're done.{" "}
            <a
              className="text-primary fw-bold"
              href="https://htmlcodex.com/contact-form"
            >
              Download Now
            </a>
            .
          </p> */}
          <form>
            <div className="row g-3">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control border-0"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="phone"
                    className="form-control border-0"
                    id="phone"
                    placeholder="Phone"
                  />
                  <label htmlFor="phone">Your Phone</label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0"
                    id="project"
                    placeholder="Project"
                  />
                  <label htmlFor="project">Your Project</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control border-0"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 120 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-12">
        <div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              <div className="contact-add-item">
                <div className="contact-icon text-primary mb-4">
                  <i className="fas fa-map-marker-alt fa-2x" />
                </div>
                <div>
                  <h4>Address</h4>
                  <p className="mb-0">Halifax, Nova Scotia, Canada</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp"
              }}
            >
              <div className="contact-add-item">
                <div className="contact-icon text-primary mb-4">
                  <i className="fas fa-envelope fa-2x" />
                </div>
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-0">techcodezypher@gmail.com</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp"
              }}
            >
              <div className="contact-add-item">
                <div className="contact-icon text-primary mb-4">
                  <i className="fa fa-phone-alt fa-2x" />
                </div>
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-0">+1 (000) 000 0000</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay="0.8s"
              style={{
                visibility: "visible",
                animationDelay: "0.8s",
                animationName: "fadeInUp"
              }}
            >
              <div className="contact-add-item">
                <div className="contact-icon text-primary mb-4">
                  <i className="fab fa-firefox-browser fa-2x" />
                </div>
                <div>
                  <h4>www.codezypher.com</h4>
                  {/* <p className="mb-0">(+012) 3456 7890</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </div>
</div>


</div>

)
}
export default Contact;