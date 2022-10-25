import { GET_ALL_DOGS, GET_DOGS_FROM_API, GET_DOGS_FROM_DB } from "../actions";

const initialState = {
  allDogs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
