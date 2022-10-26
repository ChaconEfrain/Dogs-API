import s from "./Dog.module.css";

const Dog = ({ id, image, name, temperament, weight, height, life_span }) => {
  if (Array.isArray(temperament)) {
    let stringTemperaments = temperament.map((temp) => temp.name);
  }

  return (
    <article className={s.card}>
      <img className={s.dogImage} src={image} alt={name} />
      <span>{name}</span>
    </article>
  );
};

export default Dog;
