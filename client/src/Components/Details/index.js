const Model = {
  handleDogChanging(e, currentId, dogs, setCurrentId, dispatch, getDogDetails) {
    const currentIndex = Number(currentId)
      ? dogs.findIndex((dogEl) => dogEl.id === Number(currentId))
      : dogs.findIndex((dogEl) => dogEl.id === currentId);
    let currentDog;
    if (e.target.innerHTML === "Next" && currentIndex === dogs.length - 1) {
      currentDog = dogs[0];
      setCurrentId(currentDog.id);
      dispatch(getDogDetails(currentId));
    } else if (e.target.innerHTML === "Next") {
      currentDog = dogs[currentIndex + 1];
      setCurrentId(currentDog.id);
      dispatch(getDogDetails(currentId));
    } else if (e.target.innerHTML === "Previous" && currentIndex === 0) {
      currentDog = dogs[dogs.length - 1];
      setCurrentId(currentDog.id);
      dispatch(getDogDetails(currentId));
    } else if (e.target.innerHTML === "Previous") {
      currentDog = dogs[currentIndex - 1];
      setCurrentId(currentDog.id);
      dispatch(getDogDetails(currentId));
    }
  },
};

export default Model;
