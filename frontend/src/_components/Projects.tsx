import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectsList from "../assets/projects.json";
import Project, { ProjectProp } from "./Project";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/Projects.scss";
import WebSite, { WebSiteProp } from "./projects/WebSite";
import websitesList from "../assets/projects-websites.json";

export default function Projects() {
  return <div className="container">
    <div className="row">
      <section id="websites_projects" className="col-sm-12 flyarts-section">
        <h1>Mes sites web</h1>
        <div>
          {websitesList.map((website: WebSiteProp) => {
            if (website.isDisplay)
              return <WebSite key={website.title} props={website} />
          })}
        </div>
      </section>

      <section id="projects" className="col-sm-12 flyarts-section">
        <h1>Les autres projets</h1>
        <div className="row">
          {projectsList.map((project: ProjectProp) => {
            if (project.isDisplay)
              return <Project key={project.title} props={project} />
          })}
        </div>
      </section>

      <section id="more_projects" className="col-sm-12 flyarts-section">
        <h1>Plus de projets</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <p className="card-body">
                <span>Retrouvez tous mes projets de développement directement sur mon GitHub.</span>
                <br /><br />
                <a href="https://github.com/sparky783" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
}