import {
  GET_ALL_DOGS,
  GET_DOGS_FROM_API,
  GET_DOGS_FROM_DB,
  GET_DOGS_BY_QUERY,
  GET_DOG_DETAILS,
  GET_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENTS,
  SORT_BY_WEIGHT,
  SORT_ALPHABETICALLY,
  RESET_ARRAYS,
} from "../actions";

export const getAllDogs = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/dogs")
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_ALL_DOGS, payload: data }))
      .catch((err) => console.error(err));
  };
};

export const getDogsFromApi = () => {
  return {
    type: GET_DOGS_FROM_API,
  };
};

export const getDogsFromDb = () => {
  return {
    type: GET_DOGS_FROM_DB,
  };
};

export const getDogsByQuery = (race) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/dogs?name=${race}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_DOGS_BY_QUERY, payload: data }))
      .catch((err) => console.error(err));
  };
};

export const getDogDetails = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/dogs/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_DOG_DETAILS, payload: data }))
      .catch((err) => console.error(err));
  };
};

export const getTemperaments = () => {
  return function (dispatch) {
    fetch(`http://localhost:3001/temperaments`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_TEMPERAMENTS, payload: data }))
      .catch((err) => console.error(err));
  };
};

export const filterByTemperaments = (temperament) => {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload: temperament,
  };
};

export const resetArrays = () => {
  return { type: RESET_ARRAYS };
};

export const sortByWeight = (order) => {
  return {
    type: SORT_BY_WEIGHT,
    payload: order,
  };
};

export const sortAlphabetically = (order) => {
  return {
    type: SORT_ALPHABETICALLY,
    payload: order,
  };
};

export const createDog = (data) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch("http://localhost:3001/dogs", options)
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
