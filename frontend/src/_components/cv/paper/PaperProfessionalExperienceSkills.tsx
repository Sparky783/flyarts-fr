export default function PaperProfessionalExperienceSkills({ skills }: { skills: [] }) {
  return <div className="competences">
    <label>Environement technique :</label>
    <ul>
      {skills.map((skill: any) => {
        return skill.short ? <li key={skill.short}>{skill.short}</li> : null;
      })}
    </ul>
  </div>
}