import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface WebSiteProp {
  title: string;
  link: string;
  image: string;
  description: string;
  technologies: any[];
  isDisplay: boolean;
  inProgress: boolean;
}

export default function WebSite({ props }: { props: WebSiteProp }) {
  return <a className="website" href={props.link} title={props.title} target="_blank">
    <div className="website-image">
      <img src={props.image} alt="" />
    </div>
    <div className="website-title">{props.title}</div>
    <div className="website-tehnologies">
      {props.technologies.map((techno: string) => {
        return <span>{techno}</span>
      })}
    </div>
    <div className="website-link">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </div>
  </a>
}