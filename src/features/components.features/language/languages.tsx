import { TopicTitle } from "../../../core/components.core/topictitle/topictitle";
import "./languages.css";
export function Languages() {
  return (
    <section className="languages">
      <TopicTitle whereAreYou={"Languages"} />
      <h5>Spanish</h5>
      <p> Spanish native speaker</p>
      <h5>English</h5>
      <p> C1 Level</p>
    </section>
  );
}
