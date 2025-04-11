import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project, { ProjectProp } from "./Project";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/Projects.scss";
import { useEffect, useState } from "react";
import { getAllProjects } from "../_api/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then(list => setProjects(list));
  }, [])

  return <div id="projects" className="container">
    <div className="row">
      <section id="project_list" className="col-sm-12 flyarts-section">
        <h1>Les autres projets</h1>
        <div className="row">
          {projects.map((project: ProjectProp) => {
            if (project.visibility) {
              return <div className="col-md-4" key={project.idProject}>
                <Project props={project} />
              </div>
            }
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