import { FETCH_SPECIE } from "../actions/types";

const initialState = {
  species: [],
  loading: true,
};

const SpecieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPECIE:
      return {
        ...state,
        species: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default SpecieReducer;
