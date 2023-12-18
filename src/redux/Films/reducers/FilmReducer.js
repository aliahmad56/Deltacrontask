import { FETCH_FILM } from "../actions/types";

const initialState = {
  films: [],
  loading: true,
};

const FilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM:
      return {
        ...state,
        films: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default FilmReducer;
