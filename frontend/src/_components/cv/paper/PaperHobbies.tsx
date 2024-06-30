import PaperHobby, { PaperHobbyProp } from "./PaperHobby";

export default function PaperHobbies({hobbies}: any) {
  return <section id="loisirs">
    <div className="title">
      <h2>Loisirs</h2>
    </div>
    <div className="element-list">
      {hobbies.map((hobby: PaperHobbyProp) =>
        <PaperHobby key={hobby.title} props={hobby} />
      )}
    </div>
  </section>
}