import PaperSkill, { PaperSkillProp } from "./PaperSkill";

export default function PaperSkills({ skills }: any) {
  return <section id="competences">
    <div className="title">
      <h2>Compétences</h2>
    </div>
    <ul>
      {skills.map((skill: PaperSkillProp) => {
        if (skill.isDisplay)
          return <PaperSkill key={skill.content[0].text} props={skill} />
      })}
    </ul>
  </section>
}