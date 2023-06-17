import "./index.css";

export default function RoadMapItem({ children, isAchieved = false }) {
  return (
    <div className="roadmap-item p-7">
      <div
        className={`roadmap__item-progress ${isAchieved ? "_achieved" : ""}`}
      ></div>
      {children}
    </div>
  );
}
