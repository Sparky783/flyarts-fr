import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/Contact.scss";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Form from "./form/Form";
import FormLoading from "./form/FormLoading";
import FormResponse from "./form/FormResponse";
import FormContent from "./form/FormContent";
import { useState } from "react";
import { apiUrl } from "../environments/api";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isResponseReeived, setIsResponseReeived] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    setIsSent(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'your-api-key',
        'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
      },
      body: JSON.stringify(
        {
          name: name,
          email: email,
          message: message
        }
      )
    };

    fetch(apiUrl, options)
      .then(response => response.json())
      .then(data => setResponse(data))
      .then(() => {
        setIsSent(false);
        setIsResponseReeived(true);
      })
      .catch(error => console.error(error));
  }

  return <div id="contact" className="container">
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
          <h3><FontAwesomeIcon icon={faPen} /> Envoyer un message</h3>
          <div className="card card-danger">
            <div className="card-body">
              {
                (!isSent && !isResponseReeived) &&
                <div id="contactForm">
                  <form className="ap-form" method="post" onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                      <label htmlFor="inputName"><span className="ap-form-star">*</span>Nom et prénom :</label>
                      <input id="inputName" className="form-control" type="name" name="name" aria-describedby="nameHelp" placeholder="Entrez votre nom et votre prénom" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="inputEmail"><span className="ap-form-star">*</span>E-mail :</label>
                      <input id="inputEmail" className="form-control" type="email" name="email" aria-describedby="emailHelp" placeholder="Entrez votre adresse E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="inputMessage"><span className="ap-form-star">*</span>Message :</label>
                      <textarea id="inputMessage" className="form-control" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <small className="form-text text-muted"><span className="ap-form-star">*</span> Ces champs sont obligatoires.</small>
                    <p className="text-right">
                      <button className="btn btn-danger g-recaptcha" type="submit" data-sitekey="<?= RECAPTCHA_PUBLIC_KEY ?>" data-callback="sendFormCallback">Envoyer</button>
                    </p>
                  </form>
                </div>
              }

              {
                (isSent && !isResponseReeived) &&
                <div id="contactSend" className="ap-form-send">
                  <p className="text-center">
                    Envoi en cours ...<br />
                    Veuillez patienter
                  </p>
                  <div className="spinner-border" role="status"></div>
                </div>
              }

              {
                isResponseReeived &&
                <div id="contactResponse" className="ap-form-response">
                  {response}
                </div>
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
}