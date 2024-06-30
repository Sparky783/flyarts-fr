import Hobby, { HobbyProp } from "./Hobby";

export default function Hobbies({hobbies}: any) {
  return <section id="loisirs">
    <div className="title">
      <h2>Loisirs</h2>
    </div>
    <div className="element-list">
      {hobbies.map((hobby: HobbyProp) =>
        <Hobby key={hobby.title} props={hobby} />
      )}
    </div>
  </section>
}