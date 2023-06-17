import "./index.css";

export default function BodyText3({ children, className = "", id = "" }) {
  return (
    <h1 className={`body-text3 ${className}`} id={id}>
      {children}
    </h1>
  );
}
