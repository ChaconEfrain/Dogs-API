const Model = {
  handleChange(e, setInput) {
    setInput(e.target.value);
  },

  handleSubmit(e, dispatch, resetArrays, getDogsByQuery, setInput, input) {
    dispatch(resetArrays());
    e.preventDefault();
    dispatch(getDogsByQuery(input));
    setInput("");
    document.querySelector("input").blur();
  },

  filterByTemperament(dispatch, resetArrays, filterByTemperaments) {
    dispatch(resetArrays());
    const optionsTemp = document.getElementById("filter-temp").value;
    dispatch(filterByTemperaments(optionsTemp));
  },

  filterByType(dispatch, resetArrays, getDogsFromApi, getDogsFromDb) {
    dispatch(resetArrays());
    const optionsType = document.getElementById("filter-type").value;
    optionsType === "Existing"
      ? dispatch(getDogsFromApi())
      : dispatch(getDogsFromDb());
  },

  handleSorting(dispatch, resetArrays, sortByWeight, sortAlphabetically) {
    dispatch(resetArrays());
    const optionsSort = document.getElementById("sort").value;
    const order = optionsSort.split(" ")[1];
    if (optionsSort.includes("Weight")) dispatch(sortByWeight(order));
    else dispatch(sortAlphabetically(order));
  },

  handleRefresh(dispatch, resetArrays, getAllDogs) {
    dispatch(resetArrays());
    dispatch(getAllDogs());
  },
};

export default Model;
