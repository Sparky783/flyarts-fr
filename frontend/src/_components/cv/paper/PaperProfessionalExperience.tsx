import ProfessionalExperienceSkills from "./PaperProfessionalExperienceSkills";

export interface PaperProfessionalExperienceProp {
  isDisplay: boolean;
  hideInPaper: boolean;
  period: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  skills?: [];
}

export default function PaperProfessionalExperience({ props }: { props: PaperProfessionalExperienceProp }) {
  return <li>
    <span className="date">{props.period}</span><br />
    <span className="content">{props.title}</span><br />
    <span className="activite">
      {props.shortDescription}
    </span>
    {props.skills && <ProfessionalExperienceSkills skills={props.skills} />}
  </li>
}