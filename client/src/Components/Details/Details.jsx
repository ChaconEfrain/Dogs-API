import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogDetails } from "../../redux/action-creators";
import genericDog from "../../images/generic-dog.jpg";
import s from "./Details.module.css";

const Details = () => {
  const dispatch = useDispatch();
  const { name, image, temperament, weight, height, life_span } = useSelector(
    (state) => state.dogDetails
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDogDetails(id));
  });

  let stringTemp;
  if (Array.isArray(temperament)) {
    stringTemp = temperament.map((temp) => temp.name).join(", ");
  }

  return (
    <article className={s.container}>
      <img className={s.dogImage} src={image || genericDog} alt={`${name}`} />
      <div className={s.infoContainer}>
        <span>
          <em>- Race:</em> {name}
        </span>
        <span>
          <em>- Weight:</em> {weight}
        </span>
        <span>
          <em>- Height:</em> {height}
        </span>
        <span>
          <em>- Life span:</em> {life_span}
        </span>
        <p>
          <em>- Temperament:</em> {stringTemp ? stringTemp : temperament}
        </p>
      </div>
    </article>
  );
};

export default Details;
