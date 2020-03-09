import React from "react";
import about from "./img/about.jfif";

const About = () => {
  return (
    <div>
      <body id="home" data-spy="scroll" data-target="#main-nav">
        <div>
          <section id="showcase1" className="py-5">
            <div className="primary-overlay text-white">
              <div className="container">
                <div className="row"></div>
                <div className="overflow:y">
                  <div className="card overflow:auto">
                    <img className="card-img-top" src={about} alt="" />
                    <div className="card bg-light text-white mt-10">
                      <div className="card-header text-secondary">
                        <h2>About Us</h2>
                      </div>
                      <div className="card-body">
                        <p className="card-text text-secondary aboutSize">
                          E-telli-gent (established in 1996) is a global leader
                          in providing a fcused, broad range of services to a
                          world-class, international, region-centric clientele.
                          E-telli-gent harnesses evolving, dynamic
                          e-technologies to provide unparalleled levels of
                          synergistic e-products to a heterogeneous set of
                          perpendicular e-applications. Our e-commerce solutions
                          empower clients to use distributed, diverse,and
                          didactic communication architectures, resulting in a
                          multi-tiered, value-added, highly-aligned
                          mission-critical e-service. With our next generation
                          web-scale, SMART infrastructure and solid foundation
                          of core e-business products, E-telli-gent offers
                          integrated turn-key solutions to the ever-changing,
                          world-className, international business marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
};

export default About;
