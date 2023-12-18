import { FETCH_VEHCILE } from "../actions/types";

const initialState = {
  vehicles: [],
  loading: true,
};

const VehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHCILE:
      return {
        ...state,
        vehicles: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default VehicleReducer;
