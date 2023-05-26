import { useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaGlasses } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";

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
          <p className="nav__text">Home</p>
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
          <p className="nav__text">About</p>
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
          <p className="nav__text">Stack</p>
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
          <p className="nav__text">Portfolio</p>
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
          <p className="nav__text">Contact</p>
        </div>
      </a>
    </nav>
  );
};

export default Nav;
