import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Model from ".";
import s from "./Pagination.module.css";

const Pagination = ({ dogsPerPage, totalDogs, handlePageChanging }) => {
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(1);
  const dogs = useSelector((state) => state.allDogs);
  const dogsSearched = useSelector((state) => state.dogsSearched);
  const filteredDogs = useSelector((state) => state.filteredDogs);
  const dogsFromApi = useSelector((state) => state.dogsFromApi);
  const dogsFromDb = useSelector((state) => state.dogsFromDb);

  useEffect(() => {
    Model.highlightFirstPageByDefault(s, setActivePage);
  }, [dogs, dogsSearched, filteredDogs, dogsFromApi, dogsFromDb]);

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        className={s.pagesContainer}
        onClick={(e) =>
          Model.highlightActivePage(
            e,
            activePage,
            setActivePage,
            pageNumbers,
            s
          )
        }
      >
        <li className={s.pageBtn} onClick={(e) => handlePageChanging(e)}>
          ◁
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={s.pageBtn}
            onClick={(number) => handlePageChanging(number)}
          >
            {number}
          </li>
        ))}
        <li className={s.pageBtn} onClick={(e) => handlePageChanging(e)}>
          ▷
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
