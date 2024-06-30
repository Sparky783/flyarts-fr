import { useContext, useRef } from "react";
import ProfessionalExperienceSkills from "./ProfessionalExperienceSkills";
import { CvAnimationContext } from "../../../_hooks/useCvAnimation";
import { AnimatePresence, motion } from "framer-motion";

export interface ProfessionalExperienceProp {
  isDisplay: boolean;
  hideInPaper: boolean;
  period: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  skills?: [];
}

export default function ProfessionalExperience({ props }: { props: ProfessionalExperienceProp }) {
  const ref = useRef(null);
  const { currentElement, setCurrentElement } = useContext(CvAnimationContext);

  const animVariants = {
    visible: { height: "auto" },
    hidden: { height: "0" }
  };

  return <li className="cv-block" onClick={() => setCurrentElement(ref.current)} ref={ref}>
    <div className="cv-item">
      <span className="date">{props.period}</span><br />
      <span className="content">{props.title}</span><br />
      <span className="description">{props.shortDescription}</span>
    </div>
    <AnimatePresence mode="popLayout">
      <motion.div variants={animVariants} animate={currentElement == ref.current ? 'visible' : 'hidden'} initial='hidden' exit='hidden' style={{overflow:"hidden"}}>
        <div className="cv-detail card">
          <div className="card-body">
            <p className="details">
              {props.longDescription}
            </p>
            {props.skills && <ProfessionalExperienceSkills skills={props.skills} />}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </li>
}