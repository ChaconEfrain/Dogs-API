import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAllDogs, getDogDetails } from "../../redux/action-creators";
import genericDog from "../../images/generic-dog.jpg";
import s from "./Details.module.css";
import { useState } from "react";

const Details = () => {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogDetails);
  const dogs = useSelector((state) => state.allDogs);
  const { id } = useParams();
  // const [currentDog, setCurrentDog] = useState(dog);
  const [currentId, setCurrentId] = useState(id);

  if (!dogs.length) dispatch(getAllDogs());

  useEffect(() => {
    dispatch(getDogDetails(currentId));
  }, [dog]);

  let stringTemp;
  if (Array.isArray(dog.temperament)) {
    stringTemp = dog.temperament.map((temp) => temp.name).join(", ");
  }

  //TODO: Add next and previous functionality
  const handleDogChanging = (e) => {
    const currentIndex = Number(currentId)
      ? dogs.findIndex((dogEl) => dogEl.id === Number(currentId))
      : dogs.findIndex((dogEl) => dogEl.id === currentId);
    let currentDog;
    if (e.target.innerHTML === "Next" && currentIndex === dogs.length - 1) {
      currentDog = dogs[0];
      setCurrentId(currentDog.id);
      console.log(currentDog);
      dispatch(getDogDetails(currentId));
    } else if (e.target.innerHTML === "Next") {
      currentDog = dogs[currentIndex + 1];
      setCurrentId(currentDog.id);
      dispatch(getDogDetails(currentId));
    } else if (e.target.innerHTML === "Previous" && currentIndex === 0) {
      currentDog = dogs[dogs.length - 1];
      setCurrentId(currentDog.id);
      console.log(currentDog);
      dispatch(getDogDetails(currentId));
    } else if (e.target.innerHTML === "Previous") {
      currentDog = dogs[currentIndex - 1];
      setCurrentId(currentDog.id);
      dispatch(getDogDetails(currentId));
    }
  };

  return (
    <div className={s.mainContainer}>
      <span className={s.changeDogBtn} onClick={(e) => handleDogChanging(e)}>
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
              <em>- Temperament:</em>{" "}
              {stringTemp ? stringTemp : dog.temperament}
            </p>
          </div>
        </article>
        <NavLink to="/home">
          <button className={s.homeBtn}>Home</button>
        </NavLink>
      </div>
      <span className={s.changeDogBtn} onClick={(e) => handleDogChanging(e)}>
        Next
      </span>
    </div>
  );
};

export default Details;
