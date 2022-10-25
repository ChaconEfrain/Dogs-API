import s from "./Pagination.module.css";

const Pagination = ({ dogsPerPage, totalDogs, handlePageChanging }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={s.pagesContainer}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={(number) => handlePageChanging(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
