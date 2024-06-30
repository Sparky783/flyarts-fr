import PaperProfessionalExperience, { PaperProfessionalExperienceProp } from "./PaperProfessionalExperience"

export default function PaperProfessionalExperiences({ experiences }: any) {
  return <section id="experiences">
    <div className="title">
      <h2>Expériences professionnelles</h2>
    </div>
    <ul>
      {experiences.map((experience: PaperProfessionalExperienceProp) => {
        if (experience.isDisplay && !experience.hideInPaper)
          return <PaperProfessionalExperience key={experience.title} props={experience} />
      })}
    </ul>
  </section>
}