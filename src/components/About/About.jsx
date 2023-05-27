import i18n from "../../translate/i18n";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>{i18n.t("about.h5")}</h5>
      <h2>{i18n.t("about.h2")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://res.cloudinary.com/r73fgem9f/image/upload/v1685027392/Portfolio/me-about_j1olwv.jpg"
              alt={i18n.t("about.imgAlt")}
            />
          </div>
        </div>
        <div className="about__content">
          <p className="about__content-intro">
            {i18n.t("about.p1_1")}
            <i>{i18n.t("about.span1")}</i>
            {i18n.t("about.p1_2")}
            <i>{i18n.t("about.span2")}</i>
            {i18n.t("about.p1_3")}
            <i>{i18n.t("about.span1")}</i>
            {i18n.t("about.p1_4")}
            <span className="about__content-citation">
              {i18n.t("about.span3")}
            </span>
          </p>
          <p className="about__content-body">{i18n.t("about.p2")}</p>
          <a href="#contact" className="btn btn-primary">
            {i18n.t("about.btn")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
