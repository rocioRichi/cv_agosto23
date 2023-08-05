import "./topictitle.css";
type propTopicTitle = {
  whereAreYou: string;
};
export function TopicTitle(propTopicTitle: propTopicTitle) {
  return <p className="topictitle">{propTopicTitle.whereAreYou}</p>;
}
