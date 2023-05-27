import "./Techs.css";
import { AiFillHtml5, AiFillGithub, AiFillDatabase } from "react-icons/ai";
import { BiDevices } from "react-icons/bi";
import {
  DiCss3,
  DiJqueryLogo,
  DiReact,
  DiGit,
  DiSass,
  DiDatabase,
} from "react-icons/di";
import { FaCogs, FaNodeJs, FaBootstrap, FaNpm } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiGnubash,
  SiVisualstudiocode,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiVirtualbox,
  SiVite,
  SiSequelize,
} from "react-icons/si";
import { TbCodeMinus } from "react-icons/tb";
import { VscTerminalLinux } from "react-icons/vsc";
import i18n from "../../translate/i18n";

function Techs() {
  return (
    <section id="techs">
      <h5>{i18n.t("techs.titleH5")}</h5>
      <h2>{i18n.t("techs.titleH2")}</h2>
      <div className="container techs__intro">
        <p>{i18n.t("techs.p1")}</p>
        <p>{i18n.t("techs.p2")}</p>
      </div>
      <div className="container tech__cards">
        {/* FRONTEND */}
        <div>
          <div>
            <h3>Frontend</h3>
          </div>
          <div className="tech__cards-types">
            <article className="tech__card">
              <AiFillHtml5 />
              <span className="tech__card-title">Html</span>
            </article>
            <article className="tech__card">
              <DiCss3 />
              <span className="tech__card-title">Css</span>
            </article>
            <article className="tech__card">
              <IoLogoJavascript />
              <span className="tech__card-title">Javascript</span>
            </article>
            <article className="tech__card">
              <DiJqueryLogo />
              <span className="tech__card-title">JQuery</span>
            </article>
            <article className="tech__card">
              <FaBootstrap />
              <span className="tech__card-title">Bootstrap</span>
            </article>
            <article className="tech__card">
              <DiReact />
              <span className="tech__card-title">React</span>
            </article>
            <article className="tech__card">
              <SiRedux />
              <span className="tech__card-title">Redux</span>
            </article>
            <article className="tech__card">
              <SiVite />
              <span className="tech__card-title">Vite</span>
            </article>
            <article className="tech__card">
              <DiSass />
              <span className="tech__card-title">Sass</span>
            </article>
            <article className="tech__card">
              <BiDevices />
              <span className="tech__card-title">Responsive Websites</span>
            </article>
            <article className="tech__card">
              <FiFigma />
              <span className="tech__card-title">Figma</span>
            </article>
            <article className="tech__card">
              <TbCodeMinus />
              <span className="tech__card-title">EJS</span>
            </article>
          </div>
        </div>
        {/* BACKEND */}
        <div>
          <div>
            <h3>Backend</h3>
          </div>
          <div className="tech__cards-types">
            <article className="tech__card">
              <FaNodeJs />
              <span className="tech__card-title">NodeJs</span>
            </article>
            <article className="tech__card">
              <FaNpm />
              <span className="tech__card-title">Npm</span>
            </article>
            <article className="tech__card">
              <FaCogs />
              <span className="tech__card-title">REST Api&apos;s</span>
            </article>
            <article className="tech__card">
              <SiMongodb />
              <span className="tech__card-title">Mongo</span>
            </article>
            <article className="tech__card">
              <SiExpress />
              <span className="tech__card-title">Express</span>
            </article>
            <article className="tech__card">
              <AiFillDatabase />
              <span className="tech__card-title">Mongoose</span>
            </article>
            <article className="tech__card">
              <DiDatabase />
              <span className="tech__card-title">SQL</span>
            </article>
            <article className="tech__card">
              <SiSequelize />
              <span className="tech__card-title">Sequelize</span>
            </article>
          </div>
        </div>
        {/* TOOLS */}
        <div>
          <div>
            <h3>{i18n.t("techs.tools")}</h3>
          </div>
          <div className="tech__cards-types">
            <article className="tech__card">
              <DiGit />
              <span className="tech__card-title">Git</span>
            </article>
            <article className="tech__card">
              <AiFillGithub />
              <span className="tech__card-title">Github</span>
            </article>
            <article className="tech__card">
              <SiVisualstudiocode />
              <span className="tech__card-title">VS Code</span>
            </article>
            <article className="tech__card">
              <SiVirtualbox />
              <span className="tech__card-title">Virtual machines</span>
            </article>
            <article className="tech__card">
              <SiGnubash />
              <span className="tech__card-title">Bash</span>
            </article>
            <article className="tech__card">
              <VscTerminalLinux />
              <span className="tech__card-title">Linux</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
