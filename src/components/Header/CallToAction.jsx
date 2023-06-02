import "./CallToAction.css";
import i18n from "../../translate/i18n";

const CallToAction = () => {
  return (
    <div className="cta">
      <a href="#about" className="btn btn-cv">
        {i18n.t("header.cta.about")}
      </a>
      <a href="#contact" className="btn btn-primary btn-talk">
        {i18n.t("header.cta.contact")}
      </a>
    </div>
  );
};

export default CallToAction;
