import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteFromDb, getDogsFromDb } from "../../redux/action-creators";
import s from "./Dog.module.css";

const Dog = ({ id, image, name, temperament, weight }) => {
  const dispatch = useDispatch();

  let stringTemperaments = "";

  if (Array.isArray(temperament)) {
    stringTemperaments = temperament.map((temp) => temp.name).join(", ");
  }

  //TODO: Complete the delete funcionality
  const handleDelete = () => {
    dispatch(deleteFromDb({ id }));
    dispatch(getDogsFromDb());
  };

  return (
    <figure className={s.card}>
      {!Number(id) && (
        <button onClick={handleDelete} className={s.deleteBtn}>
          X
        </button>
      )}
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
