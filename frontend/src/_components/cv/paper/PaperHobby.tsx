import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface PaperHobbyProp {
  icon: any;
  title: string;
}

export default function PaperHobby({ props }: { props: PaperHobbyProp }) {
  return <p className="element">
    <FontAwesomeIcon icon={props.icon} /><br />
    <span>{props.title}</span>
  </p>
}