import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  filterByTemperaments,
  getAllDogs,
  getDogsByQuery,
  getDogsFromApi,
  getDogsFromDb,
  getTemperaments,
  resetArrays,
  sortAlphabetically,
  sortByWeight,
} from "../../redux/action-creators";
import Model from ".";
import s from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [input, setInput] = useState("");

  if (!temperaments.length) dispatch(getTemperaments());

  return (
    <header className={s.container}>
      <form
        onSubmit={(e) =>
          Model.handleSubmit(
            e,
            dispatch,
            resetArrays,
            getDogsByQuery,
            setInput,
            input
          )
        }
        className={s.formContainer}
      >
        <input
          className={s.searchInput}
          type="text"
          value={input}
          onChange={(e) => Model.handleChange(e, setInput)}
          placeholder="Search for any race..."
        />
        <div className={s.optionsDiv}>
          <div className={s.option}>
            <label htmlFor="filter-temp">Filter by temperament</label>
            <select
              onChange={() =>
                Model.filterByTemperament(
                  dispatch,
                  resetArrays,
                  filterByTemperaments
                )
              }
              id="filter-temp"
            >
              {temperaments &&
                temperaments.map((temp) => (
                  <option key={temp} value={temp}>
                    {temp}
                  </option>
                ))}
            </select>
          </div>
          <div className={s.option}>
            <label htmlFor="filter-type">Filter by type</label>
            <select
              onChange={() =>
                Model.filterByType(
                  dispatch,
                  resetArrays,
                  getDogsFromApi,
                  getDogsFromDb
                )
              }
              id="filter-type"
            >
              <option value="Existing">Existing</option>
              <option value="Created">Created</option>
            </select>
          </div>
          <div className={s.option}>
            <label htmlFor="sort">Sort by</label>
            <select
              onChange={() =>
                Model.handleSorting(
                  dispatch,
                  resetArrays,
                  sortByWeight,
                  sortAlphabetically
                )
              }
              id="sort"
            >
              <option value="Alphabetically descending">
                Alphabetically descending
              </option>
              <option value="Alphabetically ascending">
                Alphabetically ascending
              </option>
              <option value="Weight descending">Weight descending</option>
              <option value="Weight ascending">Weight ascending</option>
            </select>
          </div>
          <button
            onClick={() =>
              Model.handleRefresh(dispatch, resetArrays, getAllDogs)
            }
            className={s.refreshBtn}
          >
            Refresh
          </button>
        </div>
      </form>
      <NavLink to="/create/dog">
        <button className={s.createBtn}>Create your own dog! ↗</button>
      </NavLink>
    </header>
  );
};

export default Header;
