import "./Header.css";
import CallToAction from "./CallToAction";
import TypewriterText from "../UI/TypewriterText";
import HeaderSocials from "./HeaderSocials";
import i18n from "../../translate/i18n";

const Header = () => {
  const currentLanguage = localStorage.getItem("i18nextLng");

  const title = {
    h1Pt: (
      <h1>
        {i18n.t("header.titleH1")} <TypewriterText />
      </h1>
    ),
    h1En: (
      <h1>
        <TypewriterText /> {i18n.t("header.titleH1")}
      </h1>
    ),
  };

  return (
    <header id="home">
      <div className="header__container">
        <div className="header__title header__title-top">
          <h2>{i18n.t("header.titleH2")}</h2>
          {currentLanguage === "en-US" ? title.h1En : title.h1Pt}
        </div>
        <div className="header__box1">
          <div className="header__image1"></div>
        </div>
        <div className="header__box2">
          <div className="header__image2"></div>
        </div>
        <div className="header__title header__title-bottom">
          <h2>{i18n.t("header.subtitleH2")}</h2>
          <CallToAction />
        </div>
      </div>
      <HeaderSocials />
      <a href="#contact" className="scroll__down" rel="noreferrer">
        {i18n.t("header.link")}
      </a>
    </header>
  );
};

export default Header;
