import PaperTraining, { PaperTrainingProp } from "./PaperTraining";

export default function PaperTrainings({ trainings }: any) {
  return <section id="formations">
    <div className="title">
      <h2>Formations et Diplômes</h2>
    </div>
    <ul>
      {trainings.map((training: PaperTrainingProp) => {
        if (training.isDisplay && !training.hideInPaper)
          return <PaperTraining key={training.title} props={training} />
      })}
    </ul>
  </section>
}