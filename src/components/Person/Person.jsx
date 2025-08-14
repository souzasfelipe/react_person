export const Person = ({ name, age="", partner }) => (
  <div>
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      <p className="Person__age"> {age}</p>
      <p className="Person__partner">{partner}</p>
    </section>
  </div>
);
