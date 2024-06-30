function Projects() {
  return <div className="container">
    <div className="row">
      <section id="projects" className="col-sm-12 flyarts-section">
        <h1>Mes projets</h1>
        <div className="row">
          {/*echo $projectsHtml;*/}
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
                  <i className="fab fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
}

export default Projects
