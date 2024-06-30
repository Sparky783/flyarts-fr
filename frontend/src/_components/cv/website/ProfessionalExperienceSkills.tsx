export default function ProfessionalExperienceSkills({ skills }: { skills: [] }) {
  return <div className="competences">
    <label>Compétences aquises :</label>
    <ul>
      { skills.map((skill:any) => <li key={skill.text}>{skill.text}</li> ) }
    </ul>
  </div>
}