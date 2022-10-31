import { useState } from "react";
import s from "./Pagination.module.css";

const Pagination = ({ dogsPerPage, totalDogs, handlePageChanging }) => {
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const highlightActivePage = (e) => {
    const clicked = e.target;
    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => item.classList.remove(s.active));
    if (Number(clicked.innerHTML)) {
      clicked.classList.add(s.active);
      setActivePage(Number(clicked.innerHTML));
    } else if (clicked.innerHTML === "◁" && activePage === 1) {
      setActivePage(pageNumbers.length);
      listItems[pageNumbers.length].classList.add(s.active);
    } else if (clicked.innerHTML === "▷" && activePage === pageNumbers.length) {
      setActivePage(1);
      listItems[1].classList.add(s.active);
    } else if (clicked.innerHTML === "◁") {
      setActivePage((last) => --last);
      listItems[activePage - 1].classList.add(s.active);
    } else if (clicked.innerHTML === "▷") {
      setActivePage((last) => ++last);
      listItems[activePage + 1].classList.add(s.active);
    }
  };

  return (
    <nav>
      <ul className={s.pagesContainer} onClick={(e) => highlightActivePage(e)}>
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
