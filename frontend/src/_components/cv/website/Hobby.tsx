import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface HobbyProp {
  icon: any;
  title: string;
}

export default function Hobby({ props }: { props: HobbyProp }) {
  return <span className="element">
    <FontAwesomeIcon icon={props.icon} /><br />
    <span>{props.title}</span>
  </span>
}