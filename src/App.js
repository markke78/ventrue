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
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Bootstrap Theme</title>
      </head>
      <body id="home" data-spy="scroll" data-target="#main-nav">
        <nav
          className="navbar navbar-expand-md navbar-light fixed-top py-4 mb-0"
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
        <script
          src="http://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
          integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
          integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
          crossorigin="anonymous"
        ></script>
      </body>
    </div>
  );
}

export default App;
