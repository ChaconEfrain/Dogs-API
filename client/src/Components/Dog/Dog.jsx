import s from "./Dog.module.css";

const Dog = ({ id, image, name, temperament, weight, height, life_span }) => {
  return (
    <article>
      <img className={s.dogImage} src={image} alt={name} />
    </article>
  );
};

export default Dog;
