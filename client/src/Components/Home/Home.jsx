import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/action-creators";
import Model from ".";
import Dog from "../Dog/Dog";
import Pagination from "../Pagination/Pagination";
import genericDog from "../../images/generic-dog.jpg";
import loadingImg from "../../images/loading.gif";
import s from "./Home.module.css";

const Home = () => {
  //Bring all the dogs
  useEffect(() => {
    dispatch(getAllDogs());
  }, []);

  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.allDogs);
  const dogsSearched = useSelector((state) => state.dogsSearched);
  const filteredDogs = useSelector((state) => state.filteredDogs);
  const dogsFromApi = useSelector((state) => state.dogsFromApi);
  const dogsFromDb = useSelector((state) => state.dogsFromDb);

  //Pagination variables
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  const filter = Model.handleFilter(
    currentPage,
    dogsPerPage,
    filteredDogs,
    dogsSearched,
    dogsFromApi,
    dogsFromDb,
    dogs
  );

  if (!filter.currentLength)
    return <img className={s.loading} src={loadingImg} alt="Loading" />;

  return (
    <div className={s.mainContainer}>
      <Pagination
        dogsPerPage={dogsPerPage}
        totalDogs={filter.currentLength}
        handlePageChanging={(e) =>
          Model.handlePageChanging(
            e,
            filter.currentLength,
            dogsPerPage,
            setCurrentPage,
            currentPage
          )
        }
      />
      <div className={s.dogsContainer}>
        {filter.currentDogs &&
          filter.currentDogs.map((dog) => (
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
