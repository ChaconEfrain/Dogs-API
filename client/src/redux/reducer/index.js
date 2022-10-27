import {
  GET_ALL_DOGS,
  GET_DOGS_FROM_API,
  GET_DOGS_FROM_DB,
  GET_DOGS_BY_QUERY,
  GET_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENTS,
  SORT_BY_WEIGHT,
  SORT_ALPHABETICALLY,
  RESET_ARRAYS,
} from "../actions";

const initialState = {
  allDogs: [],
  dogsFromApi: [],
  dogsFromDb: [],
  filteredDogs: [],
  dogsSearched: [],
  temperaments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };

    case GET_DOGS_FROM_API:
      return {
        ...state,
        dogsFromApi: [...state.allDogs].filter(
          (dog) => typeof dog.id === "number"
        ),
      };

    case GET_DOGS_FROM_DB:
      return {
        ...state,
        dogsFromDb: [...state.allDogs].filter((dog) => !Number(dog.id)),
      };

    case GET_DOGS_BY_QUERY:
      return {
        ...state,
        dogsSearched: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case FILTER_BY_TEMPERAMENTS:
      return {
        ...state,
        filteredDogs: [...state.allDogs].filter((dog) =>
          dog.temperament.includes(action.payload)
        ),
      };

    case SORT_BY_WEIGHT:
      if (action.payload === "ascending") {
        return {
          ...state,
          allDogs: [...state.allDogs].sort(
            (a, b) =>
              Number(a.weight.slice(0, 2)) - Number(b.weight.slice(0, 2))
          ),
        };
      }
      return {
        ...state,
        allDogs: [...state.allDogs].sort(
          (a, b) => Number(b.weight.slice(0, 2)) - Number(a.weight.slice(0, 2))
        ),
      };

    case SORT_ALPHABETICALLY:
      if (action.payload === "ascending") {
        return {
          ...state,
          allDogs: [...state.allDogs].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        };
      }
      return {
        ...state,
        allDogs: [...state.allDogs].sort((a, b) =>
          b.name.localeCompare(a.name)
        ),
      };

    case RESET_ARRAYS:
      return {
        ...state,
        dogsFromApi: [],
        dogsFromDb: [],
        filteredDogs: [],
        dogsSearched: [],
      };

    default:
      return state;
  }
};

export default rootReducer;
