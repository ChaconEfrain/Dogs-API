const Model = {
  handleFilter(
    currentPage,
    dogsPerPage,
    filteredDogs,
    dogsSearched,
    dogsFromApi,
    dogsFromDb,
    dogs
  ) {
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

    return { currentDogs, currentLength };
  },

  handlePageChanging(
    e,
    currentLength,
    dogsPerPage,
    setCurrentPage,
    currentPage
  ) {
    const totalPages = Math.ceil(currentLength / dogsPerPage);
    if (e.target.innerHTML === "◁" && currentPage === 1) {
      setCurrentPage(totalPages);
    } else if (e.target.innerHTML === "▷" && currentPage === totalPages)
      setCurrentPage(1);
    else if (e.target.innerHTML === "◁") setCurrentPage((last) => --last);
    else if (e.target.innerHTML === "▷") setCurrentPage((last) => ++last);
    else setCurrentPage(Number(e.target.innerHTML));
  },
};

export default Model;
