import { TopicTitle } from "../../../core/components.core/topictitle/topictitle";
import "./technologies.css";

export function Technologies() {
  return (
    <section className="technologies">
      <TopicTitle whereAreYou={"Technologies"} />
      <ul className="technologies__ul">
        <li>Javascript - TypeScript </li>
        <li>HTML , CSS, Sass, BEM</li>
        <li>ReactJS</li>
        <li>Arquitectura REDUX </li>
        <li>Mongo DB</li>
        <li>GIT</li>
        <li>Photoshop</li>
        <li>Adobe Premier</li>
      </ul>
      <ul className="technologies__ul">
        <li>Agile</li>
        <li>Scrum</li>
        <li>SOLID</li>
        <li>Trello</li>
        <li>Discord, Slack</li>
      </ul>
      <div className="technologies__alllogos">
        <div className="header__containlogosleft">
          <img
            src="/logosleft.png"
            alt="Logos programación"
            className="header__left"
          />
        </div>
        <div className="header__containlogosright">
          <img
            src="/logosright.png"
            alt="Logos programación"
            className="header__right"
          />
        </div>
      </div>
    </section>
  );
}
