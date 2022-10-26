import {
  GET_ALL_DOGS,
  GET_DOGS_FROM_API,
  GET_DOGS_FROM_DB,
  GET_DOGS_BY_QUERY,
} from "../actions";

const initialState = {
  allDogs: [],
  dogsSearched: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };

    case GET_DOGS_BY_QUERY:
      return {
        ...state,
        dogsSearched: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
