export interface PaperTrainingProp {
  isDisplay: boolean;
  hideInPaper: boolean;
  period: string;
  title: string;
  description: string;
}

export default function Training({ props }: { props: PaperTrainingProp }) {
  return <li>
    <span className="date">{props.period} :</span>
    <span className="content">{props.title}</span>
  </li>
}