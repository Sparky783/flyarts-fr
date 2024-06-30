import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/CvPaper.scss"
import cvData from "../assets/cv.json"
import PaperHobbies from "./cv/paper/PaperHobbies";
import PaperProfessionalExperiences from "./cv/paper/PaperProfessionalExperiences";
import PaperSkills from "./cv/paper/PaperSkills";
import PaperTrainings from "./cv/paper/PaperTrainings";
import { faCar, faMapMarkedAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function CvPaper() {
  const age = 33;

  return <div id="paperCv">
    <main>
      <h1>Ingénieur développement logiciel et web</h1>
      <div id="container">
        <div id="informations">
          <section id="infosText">
            <h2>Florent Lavignotte</h2>
            <small>{age} ans</small>
            <p>
              <FontAwesomeIcon icon={faCar} /> Permis B avec véhicule
              <br /><br />
              <FontAwesomeIcon icon={faMapMarkedAlt} /> 5 allée de la Houn<br />
              64420 ANDOINS
              <br /><br />
              <FontAwesomeIcon icon={faPhone} /> 06 70 56 27 10<br />
              <FontAwesomeIcon icon={faEnvelope} /> florent.lavignotte@gmail.com
            </p>
          </section>

          <PaperSkills skills={cvData.skills} />
          
          <PaperHobbies hobbies={cvData.hobbies} />
        </div>
        <div id="content">
          <PaperProfessionalExperiences experiences={cvData.professionalExperiences} />

          <PaperTrainings trainings={cvData.trainings} />
        </div>
      </div>
    </main>
  </div>;
}