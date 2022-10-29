import { useEffect } from "react";
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
import s from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [input, setInput] = useState("");

  if (!temperaments.length) dispatch(getTemperaments());

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    dispatch(resetArrays());
    e.preventDefault();
    dispatch(getDogsByQuery(input));
    setInput("");
    document.querySelector("input").blur();
  };
  const filterByTemperament = () => {
    dispatch(resetArrays());
    let options = document.getElementById("filter-temp");
    let temperamentSelected = options.value;
    dispatch(filterByTemperaments(temperamentSelected));
  };
  const filterByType = () => {
    dispatch(resetArrays());
    let options = document.getElementById("filter-type");
    let typeSelected = options.value;
    typeSelected === "Existing"
      ? dispatch(getDogsFromApi())
      : dispatch(getDogsFromDb());
  };
  const handleSorting = () => {
    dispatch(resetArrays());
    let options = document.getElementById("sort");
    let orderSelected = options.value;
    let order = orderSelected.split(" ")[1];
    if (orderSelected.includes("Weight")) dispatch(sortByWeight(order));
    else dispatch(sortAlphabetically(order));
  };
  const handleRefresh = () => {
    dispatch(resetArrays());
    dispatch(getAllDogs());
  };

  return (
    <header className={s.container}>
      <form onSubmit={(e) => handleSubmit(e)} className={s.formContainer}>
        <input
          className={s.searchInput}
          type="text"
          value={input}
          onChange={(e) => handleChange(e)}
          placeholder="Search for any race..."
        />
        <div className={s.optionsDiv}>
          <div className={s.option}>
            <label htmlFor="filter-temp">Filter by temperament</label>
            <select onChange={filterByTemperament} id="filter-temp">
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
            <select onChange={filterByType} id="filter-type">
              <option value="Existing">Existing</option>
              <option value="Created">Created</option>
            </select>
          </div>
          <div className={s.option}>
            <label htmlFor="sort">Sort by</label>
            <select onChange={handleSorting} id="sort">
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
          <button onClick={handleRefresh} className={s.refreshBtn}>
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
