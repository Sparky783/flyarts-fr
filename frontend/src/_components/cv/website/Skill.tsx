export interface SkillProp {
  isDisplay: boolean,
  content: {
    isImportant: boolean,
    text: string
  }[];
}

export default function Skill({ props }: { props: SkillProp }) {
  return <li>
    <span className="content">
      {props.content.map(element => {
        return element.isImportant ? <span className="info"> {element.text}</span> : element.text
      })}
    </span>
  </li>
}