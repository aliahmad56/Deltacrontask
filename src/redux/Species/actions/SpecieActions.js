import axios from "axios";
import { FETCH_SPECIE } from "./types";

const apiUrl = "https://swapi.dev/api/species";

export const fetchSpecies = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    dispatch({
      type: FETCH_SPECIE,
      payload: response.data.results,
    });
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
};

