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
  const filteredDogs = useSelector((state) => state.filteredDogs);
  const dogsFromApi = useSelector((state) => state.dogsFromApi);
  const dogsFromDb = useSelector((state) => state.dogsFromDb);

  //Pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  //Bring all the dogs
  useEffect(() => {
    dispatch(getAllDogs());
  }, []);

  //Get current dogs for pagination
  const indexOfLastDog = currentPage * dogsPerPage; //(8, 16)
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  let currentDogs, currentLength;

  const slicedArray = (dogsArray) =>
    dogsArray.slice(indexOfFirstDog, indexOfLastDog);

  if (filteredDogs.length) {
    currentDogs = slicedArray(filteredDogs);
    currentLength = filteredDogs.length;
  } else if (dogsSearched.length) {
    currentDogs = slicedArray(dogsSearched);
    currentLength = dogsSearched.length;
  } else if (dogsFromApi.length) {
    currentDogs = slicedArray(dogsFromApi);
    currentLength = dogsFromApi.length;
  } else if (dogsFromDb.length) {
    currentDogs = slicedArray(dogsFromDb);
    currentLength = dogsFromDb.length;
  } else {
    currentDogs = slicedArray(dogs);
    currentLength = dogs.length;
  }

  //Change pages
  const handlePageChanging = (e) => {
    const totalPages = Math.ceil(currentLength / dogsPerPage);
    if (e.target.innerHTML === "◁" && currentPage === 1) {
      setCurrentPage(totalPages);
    } else if (e.target.innerHTML === "▷" && currentPage === totalPages)
      setCurrentPage(1);
    else if (e.target.innerHTML === "◁") setCurrentPage((last) => --last);
    else if (e.target.innerHTML === "▷") setCurrentPage((last) => ++last);
    else setCurrentPage(Number(e.target.innerHTML));
  };

  return (
    <div className={s.mainContainer}>
      <Pagination
        dogsPerPage={dogsPerPage}
        totalDogs={currentLength}
        handlePageChanging={handlePageChanging}
      />
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
    </div>
  );
};

export default Home;
