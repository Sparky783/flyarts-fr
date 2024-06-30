import { useContext, useRef } from "react";
import Skill, { SkillProp } from "./Skill";
import { CvAnimationContext } from "../../../_hooks/useCvAnimation";
import { AnimatePresence, motion } from "framer-motion";

export default function Skills({ skills }: any) {
  const ref = useRef(null);
  const { currentElement, setCurrentElement } = useContext(CvAnimationContext);

  const animVariants = {
    visible: { height: "auto" },
    hidden: { height: "0" }
  };

  return <section id="competences">
    <div className="title">
      <h2>Compétences</h2>
    </div>
    <ul>
      {skills.map((skill: SkillProp) => {
        if (skill.isDisplay)
          return <Skill key={skill.content[0].text} props={skill} />
      })}

      <li className="cv-block" onClick={() => setCurrentElement(ref.current)} ref={ref}>
        <div className="cv-item">
          <span className="content">Autres outils <button className="btn btn-sm btn-danger">+</button></span>
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div variants={animVariants} animate={currentElement == ref.current ? 'visible' : 'hidden'} initial='hidden' exit='hidden' style={{overflow:"hidden"}}>
            <div className="cv-detail card">
              <div className="card-body">
                <p>
                  <b>Logiciels graphiques:</b> Photoshop CS6, Gimp, Paint<br />
                  <b>Logiciels de modélisation 3D:</b> Blender<br />
                  <b>Logiciels de CAO:</b> FreeCAD, AutoDesk Fusion 360, SolidWorks<br />
                  <b>Logiciels de montage vidéo:</b> Premiere Pro, After Effect, DaVinci Resolve<br />
                  <b>Logiciels de bureautique:</b> Suite Microsoft Office (Word, Excel, PowerPoint)
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </li>
    </ul>
  </section>
}