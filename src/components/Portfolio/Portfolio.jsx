import "./Portfolio.css";

import ImageModal from "../UI/ImageModal";

const Portfolio = () => {
  const projects = [
    {
      thumbnail:
        "https://res.cloudinary.com/r73fgem9f/image/upload/v1685041924/Portfolio/AlltechThumb_u8s6a5.jpg",
      mainImage:
        "https://res.cloudinary.com/r73fgem9f/image/upload/v1685041925/Portfolio/AllTech1_r2ldaf.jpg",
      image2:
        "https://res.cloudinary.com/r73fgem9f/image/upload/v1685041925/Portfolio/AllTech2_b8xrdx.jpg",
      image3:
        "https://res.cloudinary.com/r73fgem9f/image/upload/v1685041924/Portfolio/AllTech3_r9xpdx.jpg",
      title: "AllTech",
      description:
        "A fullstack e-commerce application, the frontend was built with Vite, React, Redux and Bootstrap. The backend was built with NodeJs, Express, and MongoDB.",
      github: "https://github.com/ReFabri/Alltech",
      demo: "https://jade-light-salamander.cyclic.app/",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/r73fgem9f/image/upload/v1685041926/Portfolio/YelpThumb_nudsw3.jpg",
      mainImage:
        "https://res.cloudinary.com/r73fgem9f/image/upload/v1685041924/Portfolio/YelpCamp1_uxr8bm.jpg",
      image2:
        "https://res.cloudinary.com/r73fgem9f/image/upload/v1685041924/Portfolio/YelpCamp2_cngqd1.jpg",
      image3:
        "https://res.cloudinary.com/r73fgem9f/image/upload/v1685041925/Portfolio/YelpCamp3_xrplml.jpg",
      title: "YelpCamp",
      description:
        "The YelpCamp website is a fullstack project done as part of Colt Steele's Web Development course using NodeJs with Express for the backend and MongoDB for the Database",
      github: "https://github.com/ReFabri/YelpCamp",
      demo: "https://excited-dove-hat.cyclic.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        {projects.map((project, index) => {
          return (
            <article key={index} className="portfolio__item">
              <div className="portfolio__item-thumbnail">
                <img src={project.thumbnail} alt="" />
              </div>
              <div className="portfolio__item-description">
                <h3>
                  <span>&gt; </span>
                  {project.title}
                </h3>
                <p>{project.description}</p>
              </div>

              <div className="portfolio__item-cta">
                <a
                  href={project.github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={project.demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>

              <ImageModal
                src={project.mainImage}
                alt={`${project.title} main image`}
                className="portfolio__item-image1"
              />

              <ImageModal
                src={project.image2}
                alt={`${project.title} second image`}
                className="portfolio__item-image2"
              />

              <ImageModal
                src={project.image3}
                alt={`${project.title} third image`}
                className="portfolio__item-image3"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
