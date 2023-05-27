import { useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaGlasses } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import i18n from "../../translate/i18n";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav id="nav__bar">
      <a href="#home">
        <div>
          <div
            className={activeNav === "#" ? "nav__icon active" : "nav__icon"}
            onClick={() => setActiveNav("#")}
          >
            <AiOutlineHome />
          </div>
          <p className="nav__text">{i18n.t("nav.home")}</p>
        </div>
      </a>

      <a href="#about">
        <div>
          <div
            className={
              activeNav === "#about" ? "nav__icon active" : "nav__icon"
            }
            onClick={() => setActiveNav("#about")}
          >
            <AiOutlineUser />
          </div>
          <p className="nav__text">{i18n.t("nav.about")}</p>
        </div>
      </a>

      <a href="#techs">
        <div>
          <div
            className={
              activeNav === "#techs" ? "nav__icon active" : "nav__icon"
            }
            onClick={() => setActiveNav("#techs")}
          >
            <FaGlasses />
          </div>
          <p className="nav__text">{i18n.t("nav.stack")}</p>
        </div>
      </a>

      <a href="#portfolio">
        <div>
          <div
            className={
              activeNav === "#portfolio" ? "nav__icon active" : "nav__icon"
            }
            onClick={() => setActiveNav("#portfolio")}
          >
            <RiServiceLine />
          </div>
          <p className="nav__text">{i18n.t("nav.portfolio")}</p>
        </div>
      </a>

      <a href="#contact">
        <div>
          <div
            className={
              activeNav === "#contact" ? "nav__icon active" : "nav__icon"
            }
            onClick={() => setActiveNav("#contact")}
          >
            <BiMessageSquareDetail />
          </div>
          <p className="nav__text">{i18n.t("nav.contact")}</p>
        </div>
      </a>
    </nav>
  );
};

export default Nav;
