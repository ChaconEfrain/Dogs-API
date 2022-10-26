import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/action-creators";
import Dog from "../Dog/Dog";
import Pagination from "../Pagination/Pagination";
import genericDog from "../../images/generic-dog.jpg";
import s from "./Home.module.css";

//TODO: Make another route for the query dogs
const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.allDogs);
  const dogsSearched = useSelector((state) => state.dogsSearched);

  //Pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  //Bring all the dogs
  useEffect(() => {
    dispatch(getAllDogs());
  }, []);

  //Dividing dog arrays depending on where they come from
  // const dogsFromApi = dogs.filter((dog) => typeof dog.id === "number");
  // const dogsFromDb = dogs.filter((dog) => typeof dog.id === "string");

  //Get current dogs for pagination
  const indexOfLastDog = currentPage * dogsPerPage; //(8, 16)
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  let currentDogs;

  if (dogsSearched.length)
    currentDogs = dogsSearched.slice(indexOfFirstDog, indexOfLastDog);
  else currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  //Change pages
  const handlePageChanging = (e) => {
    setCurrentPage(e.target.innerHTML);
  };

  return (
    <div className={s.mainContainer}>
      <div className={s.dogsContainer}>
        {currentDogs &&
          currentDogs.map((dog) => (
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
      <Pagination
        dogsPerPage={dogsPerPage}
        totalDogs={dogs.length}
        handlePageChanging={handlePageChanging}
      />
    </div>
  );
};

export default Home;
