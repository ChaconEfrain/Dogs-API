import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAllDogs, getDogDetails } from "../../redux/action-creators";
import Model from ".";
import genericDog from "../../images/generic-dog.jpg";
import loadingImg from "../../images/loading.gif";
import s from "./Details.module.css";
import { useState } from "react";

const Details = () => {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogDetails);
  const dogs = useSelector((state) => state.allDogs);
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);

  if (!dogs.length) dispatch(getAllDogs());

  useEffect(() => {
    dispatch(getDogDetails(currentId));
  }, [dog]);

  let stringTemp;
  if (Array.isArray(dog.temperament)) {
    stringTemp = dog.temperament.map((temp) => temp.name).join(", ");
  }

  if (
    !Object.keys(dog).length ||
    (Number(currentId) && dog.id !== Number(currentId)) ||
    (!Number(currentId) && dog.id !== currentId)
  )
    return <img className={s.loading} src={loadingImg} alt="Loading" />;

  return (
    <div className={s.mainContainer}>
      <span
        className={s.changeDogBtn}
        onClick={(e) =>
          Model.handleDogChanging(
            e,
            currentId,
            dogs,
            setCurrentId,
            dispatch,
            getDogDetails
          )
        }
      >
        Previous
      </span>
      <div className={s.detailsDiv}>
        <article className={s.dogDetails}>
          <img
            className={s.dogImage}
            src={dog.image || genericDog}
            alt={`${dog.name}`}
          />
          <div className={s.infoContainer}>
            <span>
              <em>- Race:</em> {dog.name}
            </span>
            <span>
              <em>- Weight:</em> {dog.weight}
            </span>
            <span>
              <em>- Height:</em> {dog.height}
            </span>
            <span>
              <em>- Life span:</em> {dog.life_span}
            </span>
            <p>
              <em>- Temperament:</em> {stringTemp || dog.temperament}
            </p>
          </div>
        </article>
        <NavLink to="/home">
          <button className={s.homeBtn}>Home</button>
        </NavLink>
      </div>
      <span
        className={s.changeDogBtn}
        onClick={(e) =>
          Model.handleDogChanging(
            e,
            currentId,
            dogs,
            setCurrentId,
            dispatch,
            getDogDetails
          )
        }
      >
        Next
      </span>
    </div>
  );
};

export default Details;
