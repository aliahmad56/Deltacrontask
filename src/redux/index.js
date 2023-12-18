import { combineReducers } from "redux";
import SpecieReducer from "./Species/reducers/SpecieReducer";
import FilmReducer from "./Films/reducers/FilmReducer";
import VehicleReducer from "./Vehicles/reducers/VehicleReducer";


export default combineReducers({
  specie: SpecieReducer,
  film: FilmReducer,
  vehicle:VehicleReducer,
});
