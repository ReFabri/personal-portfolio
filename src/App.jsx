import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import About from "./components/About/About";
import Techs from "./components/Techs/Techs";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <About />
      <Techs />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
