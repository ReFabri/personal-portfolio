import "./Header.css";
import CallToAction from "./CallToAction";
import TypewriterText from "../UI/TypewriterText";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="header__container">
        <div className="header__title header__title-top">
          <h2>Hi, I&apos;m Renato Fabricio</h2>
          <h1>
            <TypewriterText /> developer
          </h1>
        </div>
        <div className="header__box1">
          <div className="header__image1"></div>
        </div>
        <div className="header__box2">
          <div className="header__image2"></div>
        </div>
        <div className="header__title header__title-bottom">
          <h2>Let&apos;s work together</h2>
          <CallToAction />
        </div>
      </div>
      <HeaderSocials />
      <a href="#contact" className="scroll__down" rel="noreferrer">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
