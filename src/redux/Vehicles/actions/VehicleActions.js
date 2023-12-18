import axios from "axios";
import { FETCH_VEHCILE } from "./types";

const apiUrl = "https://swapi.dev/api/vehicles";

export const fetchvehicles = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    const vehicle= response.data;
    console.log('checking from vehicle', vehicle);
    dispatch({
      type: FETCH_VEHCILE,
      payload: response.data.results,
    });
  } catch (error) {
    console.error("Error fetching Vehcicles:", error);
  }
};

