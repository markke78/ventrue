import React from "react";
import logoImg from "./img/logo2.png";

const Contact = () => {
  return (
    <div className="">
      <section id="showcase" className="py-5">
        <div className="primary-overlay text-white">
          <div className="container">
            <div className="row"></div>
            <br></br>
            <section id="contact" class="bg-light py-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-9">
                    <h3 className="text-dark contact-text-main">
                      Get In Touch
                    </h3>
                    <p class="text-dark contact-text">
                      Please feel free to let us know about your concerns.
                    </p>
                    <form>
                      <div class="input-group input-group-lg mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fas fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>

                      <div class="input-group input-group-lg mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fas fa-envelope"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>

                      <div class="input-group input-group-lg mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="fas fa-pencil-alt"></i>
                          </span>
                        </div>
                        <textarea
                          class="form-control"
                          placeholder="Message"
                          rows="5"
                        ></textarea>
                      </div>

                      <input
                        type="submit"
                        value="Submit"
                        class="btn btn-secondary btn-block btn-lg"
                      />
                    </form>
                  </div>

                  <div class="col-lg-3 mg-auto">
                    <img
                      src={logoImg}
                      width="200"
                      height="200"
                      alt="Transparent Letter E Icon"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
