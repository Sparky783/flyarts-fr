import "../assets/css/Contact.scss";

export default function Contact() {
  return <div className="container">
    <div className="row">
      <div className="col-sm-6 col-xs-12 offset-sm-3">
        <section id="informations">
          <h1>Me contacter</h1>
          <p className="text-center">
            <b>Florent LAVIGNOTTE</b>
            <br /><br />
            <a className="btn btn-danger" href="mailto:florent.lavignotte@gmail.com">florent.lavignotte@gmail.com</a>
          </p>
        </section>
        <section id="formulaire">
          <h3><i className="fas fa-pen"></i> Envoyer un message</h3>
          <div className="card card-danger">
            <div className="card-body">
              <div id="contactForm">
                <form className="ap-form" method="post">
                  <div className="form-group mb-2">
                    <label htmlFor="inputName"><span className="ap-form-star">*</span>Nom et prénom :</label>
                    <input id="inputName" className="form-control" type="name" name="name" aria-describedby="nameHelp" placeholder="Entrez votre nom et votre prénom" />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="inputEmail"><span className="ap-form-star">*</span>E-mail :</label>
                    <input id="inputEmail" className="form-control" type="email" name="email" aria-describedby="emailHelp" placeholder="Entrez votre adresse E-mail" />
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="inputMessage"><span className="ap-form-star">*</span>Message :</label>
                    <textarea id="inputMessage" className="form-control" name="message"></textarea>
                  </div>
                  <small className="form-text text-muted"><span className="ap-form-star">*</span> Ces champs sont obligatoires.</small>
                  <p className="text-right">
                    <button className="btn btn-danger g-recaptcha" type="submit" data-sitekey="<?= RECAPTCHA_PUBLIC_KEY ?>" data-callback="sendFormCallback">Envoyer</button>
                  </p>
                </form>
              </div>

              <div id="contactSend" className="ap-form-send">
                <p className="text-center">
                  Envoi en cours ...<br />
                  Veuillez patienter
                </p>
                <div className="spinner-border" role="status"></div>
              </div>

              <div id="contactResponse" className="ap-form-response"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
}