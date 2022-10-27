import s from "./Dog.module.css";

const Dog = ({ id, image, name, temperament, weight, height, life_span }) => {
  let stringTemperaments = "";

  if (Array.isArray(temperament)) {
    stringTemperaments = temperament.map((temp) => temp.name).join(", ");
  }

  return (
    <article className={s.card}>
      <img className={s.dogImage} src={image} alt={name} />
      <span>{name}</span>
      <div className={s.dogInfo}>
        <p>
          <em>- Temperament:</em>{" "}
          {stringTemperaments ? stringTemperaments : temperament}
        </p>
        <p>
          <em>- Weight:</em> {weight}
        </p>
      </div>
    </article>
  );
};

export default Dog;
