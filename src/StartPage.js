import React from "react";

const StartPage = props => {
  return (
    <div className="App">
      <div id="home" data-spy="scroll" data-target="#main-nav">
        <header className="">
          <div>
            <section id="showcase" className="py-5">
              <div className="primary-overlay text-white">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 text-center">
                      <h1 className="display-2 mt-5 pt-5 slogan">
                        Making the World Talk about You.
                      </h1>
                      <p className=" sub-slogan">We can help you on that.</p>
                      <a
                        href="#"
                        className="btn btn-outline-secondary btn-lg text-white"
                      >
                        <i className="fas fa-arrow-right"></i> Read More
                      </a>
                    </div>
                    <div className="col-lg-6 grid-container">
                      <div class="one"></div>
                      <div class="two"></div>
                      <div class="three"></div>
                      <div class="four"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="boxes" className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card text-center border-dark mb-resp">
                      <div className="card-body">
                        <h3 className="text-dark">Be Better</h3>
                        <p className="text-dark">
                          Technology has affected the different industries
                          immensely.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center bg-dark text-white mb-resp">
                      <div className="card-body">
                        <h3>Be Smarter</h3>
                        <p>
                          Everything you need to get started with SMART in your
                          classroom today.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center border-dark mb-resp">
                      <div className="card-body">
                        <h3 className="text-dark">Be Faster</h3>
                        <p className="text-dark">
                          Boosting your business growth and productivity using
                          cutting-edge technology.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center bg-dark text-white">
                      <div className="card-body">
                        <h3>Be Stronger</h3>
                        <p>
                          From schools to colleges and universities, everyone
                          can feel the impact of technology.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </header>
      </div>
    </div>
  );
};

export default StartPage;
