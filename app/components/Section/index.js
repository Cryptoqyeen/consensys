import "./index.css";

export default function Section({ children, className, id = "" }) {
  return (
    <section className={`body-section w-full ${className}`} id={id}>
      {children}
    </section>
  );
}
