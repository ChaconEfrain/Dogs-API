import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/action-creators";
import Dog from "../Dog/Dog";
import genericDog from "../../images/generic-dog.jpg";
import s from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.allDogs);
  const dogsFromApi = dogs.filter((dog) => typeof dog.id === "number");
  const dogsFromDb = dogs.filter((dog) => typeof dog.id === "string");

  dispatch(getAllDogs());

  return (
    <div className={s.mainContainer}>
      {dogs &&
        dogs.map((dog) => (
          <Dog
            key={dog.id}
            id={dog.id}
            image={dog.image || genericDog}
            name={dog.name}
            temperament={dog.temperament}
            weight={dog.weight}
            height={dog.height}
            life_span={dog.life_span}
          />
        ))}
    </div>
  );
};

export default Home;
