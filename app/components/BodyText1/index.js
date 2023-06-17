import "./index.css";

export default function BodyText1({ children, className = "", id = "" }) {
  return (
    <h1 className={`body-text1 ${className}`} id={id}>
      {children}
    </h1>
  );
}
