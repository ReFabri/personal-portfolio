import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import i18n from "../../translate/i18n";

const Footer = () => {
  //TODO Create and add my Linkedin account link.
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Renato Fabricio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">{i18n.t("footer.home")}</a>
        </li>
        <li>
          <a href="#about">{i18n.t("footer.about")}</a>
        </li>
        <li>
          <a href="#techs">{i18n.t("footer.stack")}</a>
        </li>
        <li>
          <a href="#portfolio">{i18n.t("footer.portfolio")}</a>
        </li>
        <li>
          <a href="#contact">{i18n.t("footer.contact")}</a>
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
        <small>&copy; {i18n.t("footer.small")}</small>
      </div>
    </footer>
  );
};

export default Footer;
