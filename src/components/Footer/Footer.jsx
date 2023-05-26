import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  //TODO Create and add my Linkedin account link.
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Renato Fabricio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#techs">Stack</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/ReFabri">
          <FaGithub />
        </a>
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Renato Fabricio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
