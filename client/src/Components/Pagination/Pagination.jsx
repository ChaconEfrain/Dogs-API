import { useState } from "react";
import Model from ".";
import s from "./Pagination.module.css";

const Pagination = ({ dogsPerPage, totalDogs, handlePageChanging }) => {
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(1);

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
