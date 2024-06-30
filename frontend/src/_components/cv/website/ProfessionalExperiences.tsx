import ProfessionalExperience, { ProfessionalExperienceProp } from "./ProfessionalExperience"

function ProfessionalExperiences({ experiences }: any) {
  return <section id="experiences">
    <div className="title">
      <h2>Expériences professionnelles</h2>
    </div>
    <ul>
      {experiences.map((experience: ProfessionalExperienceProp) => {
        if (experience.isDisplay)
          return <ProfessionalExperience key={experience.title} props={experience} />
      })}
    </ul>
  </section>
}

export default ProfessionalExperiences
