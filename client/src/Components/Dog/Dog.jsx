import { NavLink } from "react-router-dom";
import s from "./Dog.module.css";

const Dog = ({ id, image, name, temperament, weight }) => {
  let stringTemperaments = "";

  if (Array.isArray(temperament)) {
    stringTemperaments = temperament.map((temp) => temp.name).join(", ");
  }

  return (
    <figure className={s.card}>
      <NavLink className={s.link} to={`/dog/${id}`}>
        <img className={s.dogImage} src={image} alt={name} />
      </NavLink>
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
    </figure>
  );
};

export default Dog;
