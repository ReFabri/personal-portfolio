import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import LanguageSelector from "./components/UI/LanguageSelector";
import About from "./components/About/About";
import Techs from "./components/Techs/Techs";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshHandler = () => {
    setRefresh(!refresh);
  };

  return (
    <React.Fragment>
      <LanguageSelector onChange={refreshHandler} />
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
