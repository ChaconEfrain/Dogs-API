import { NavLink } from "react-router-dom";
import s from "./Dog.module.css";

const Dog = ({ id, image, name, temperament, weight, life_span }) => {
  let stringTemperaments = "";

  if (Array.isArray(temperament)) {
    stringTemperaments = temperament.map((temp) => temp.name).join(", ");
  }

  return (
    <NavLink className={s.link} to={`/dog/${id}`}>
      <figure className={s.card}>
        <img className={s.dogImage} src={image} alt={name} />
        <span>{name}</span>
        <div className={s.dogInfo}>
          <p>
            <em>- Temperament:</em>{" "}
            {stringTemperaments ? stringTemperaments : temperament}
          </p>
          <p>
            <em>- Life span:</em> {life_span}
          </p>
          <p>
            <em>- Weight:</em> {weight}
          </p>
        </div>
      </figure>
    </NavLink>
  );
};

export default Dog;
