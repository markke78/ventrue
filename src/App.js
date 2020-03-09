import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import StartPage from "./StartPage";
import Contact from "./Contact";
import logoE from "./img/logo2.png";
function App() {
  const [sence, setSence] = useState(null);

  useEffect(() => {
    if (sence === null) {
      setSence(<StartPage />);
    } else {
      setSence(sence);
    }
  }, [sence]);
  const goAbout = e => {
    setSence(<About />);
  };

  const goStartPage = e => {
    setSence(<StartPage />);
  };
  const goContact = e => {
    setSence(<Contact />);
  };

  return (
    <div class="App">
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top"
        id="main-nav"
      >
        <div className="container">
          <a href="#home" className="navbar-brand">
            <img
              src={logoE}
              // width="75"
              height="50"
              alt="Transparent Letter E Icon"
              class="logo-img"
            />
            <h3 className="d-inline align-middle logo-title">E-telli-gent</h3>
          </a>

          <div></div>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={goStartPage}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={goAbout}>
                  About
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={goContact}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ paddingTop: 0 }}>{sence}</div>

      <footer id="main-footer" className="py-5 text-white bg-secondary">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 ml-auto">
              <p className="lead">
                Copyright &copy;2020
                <span id="year"></span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
