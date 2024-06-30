import { useContext, useRef } from "react";
import { CvAnimationContext } from "../../../_hooks/useCvAnimation";
import { AnimatePresence, motion } from "framer-motion";

export interface TrainingProp {
  isDisplay: boolean;
  hideInPaper: boolean;
  period: string;
  title: string;
  description: string;
}

export default function Training({ props }: { props: TrainingProp }) {
  const ref = useRef(null);
  const { currentElement, setCurrentElement } = useContext(CvAnimationContext);
  
  const animVariants = {
    visible: { height: "auto" },
    hidden: { height: "0" }
  };

  return <li className="cv-block" onClick={() => setCurrentElement(ref.current)} ref={ref}>
    <div className="cv-item">
      <span className="date">{props.period}</span> : <span className="content">{props.title}</span>
    </div>
    <AnimatePresence mode="popLayout">
      <motion.div variants={animVariants} animate={currentElement == ref.current ? 'visible' : 'hidden'} initial='hidden' exit='hidden' style={{overflow:"hidden"}}>
      <div className="cv-detail card">
        <div className="card-body">
          <p>
            {props.description}
          </p>
        </div>
      </div>
      </motion.div>
    </AnimatePresence>
  </li>
}