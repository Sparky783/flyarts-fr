import Training, { TrainingProp } from "./Training";

export default function Trainings({ trainings }: any) {
  return <section id="formations">
    <div className="title">
      <h2>Formations et Diplômes</h2>
    </div>
    <ul>
      {trainings.map((training: TrainingProp) => {
        if (training.isDisplay)
          return <Training key={training.title} props={training} />
      })}
    </ul>
  </section>
}