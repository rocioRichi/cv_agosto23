import { TopicTitle } from "../../../core/components.core/topictitle/topictitle";
import "./hobbies.css";

export function Hobbies() {
  return (
    <section className="hobbies">
      <TopicTitle whereAreYou={"Hobbies"} />
      <div className="hobbies__pics">
        <img src="./yoga.png" alt="Scene of Yoga" />
        <img src="./cats.png" alt="Cat`s silhouette" />
        <img src="./diy.png" alt="Do it yourself" />
      </div>
      <div className="hobbies__pics">
        <img src="./typewriter.png" alt="typewriter" />
        <img src="./series.png" alt="Tv with the word Series on it" />
        <img src="./drawing.png" alt="Drawing notebook" />
      </div>
      <p>If you want to find out more, click on the icons above</p>
    </section>
  );
}
