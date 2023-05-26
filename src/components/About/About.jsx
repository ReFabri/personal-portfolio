import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://res.cloudinary.com/r73fgem9f/image/upload/v1685027392/Portfolio/me-about_j1olwv.jpg"
              alt="About Me"
            />
          </div>
        </div>
        <div className="about__content">
          <p className="about__content-intro">
            &quot;I love learning new <i>things</i> and creating new{" "}
            <i>stuff</i> with the <i>things</i> that I have learned.&quot; -{" "}
            <span className="about__content-citation">(Me, just now..)</span>
          </p>
          <p className="about__content-body">
            I always loved to tinker with all kinds of crafts. In mechatronic
            engineering I had my first coding experiences, but the most
            important thing I realized was the creative freedom to try anything
            and always feel like my code was consistently improving and the
            awesome feeling of creating beautiful and functional software with
            the knowledge that any bug could always be fixed.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
