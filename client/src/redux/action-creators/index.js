import { GET_ALL_DOGS, GET_DOGS_FROM_API, GET_DOGS_FROM_DB } from "../actions";

export const getAllDogs = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/dogs")
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_ALL_DOGS, payload: data }))
      .catch((err) => console.error(err));
  };
};
