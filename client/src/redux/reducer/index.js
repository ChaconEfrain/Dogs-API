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
  DELETE_FROM_DB,
} from "../actions";

const initialState = {
  allDogs: [],
  dogsFromApi: [],
  dogsFromDb: [],
  dogDetails: {},
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

    case GET_DOG_DETAILS:
      return {
        ...state,
        dogDetails: action.payload,
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
      // Sorting by max weight
      if (action.payload === "ascending") {
        return {
          ...state,
          allDogs: [...state.allDogs].sort((a, b) =>
            Number(
              a.weight.split(" ")[a.weight.split(" ").length - 2] -
                Number(b.weight.split(" ")[b.weight.split(" ").length - 2])
            )
          ),
        };
      }
      return {
        ...state,
        allDogs: [...state.allDogs].sort((a, b) =>
          Number(
            b.weight.split(" ")[b.weight.split(" ").length - 2] -
              Number(a.weight.split(" ")[a.weight.split(" ").length - 2])
          )
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

    case DELETE_FROM_DB:
      return {
        ...state,
        dogsFromDb: [...state.dogsFromDb].filter(
          (dog) => dog.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
