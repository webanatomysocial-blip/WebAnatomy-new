import "../workCss/JustHeading.css";

export default function JustHeading({ tittle }) {
  return (
    <>
      <section className="JustHeading-section">
        <h1 className="head-text">{tittle}</h1>
      </section>
    </>
  );
}
