export interface PaperSkillProp {
  isDisplay: boolean,
  content: {
    isImportant: boolean,
    text: string
  }[];
}

export default function PaperSkill({ props }: { props: PaperSkillProp }) {
  return <>
    {props.content.map(element => {
      return <li>
        {element.isImportant ?
          <span className="techno">({element.text})</span> :
          <span className="content">{element.text}</span>}
      </li>
    })}
  </>
}


