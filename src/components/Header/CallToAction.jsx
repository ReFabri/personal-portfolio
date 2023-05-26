import "./CallToAction.css";
import CV from "../../assets/cv.pdf";

const CallToAction = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-cv">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary btn-talk">
        Let&apos;s Talk
      </a>
    </div>
  );
};

export default CallToAction;
