import "./index.css";

export default function BodyText2({ children, className = "", id = "" }) {
  return (
    <h1 className={`body-text2 ${className}`} id={id}>
      {children}
    </h1>
  );
}
