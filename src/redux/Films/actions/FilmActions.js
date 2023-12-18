import axios from "axios";
import { FETCH_FILM } from "./types";

const apiUrl = "https://swapi.dev/api/films";

export const fetchFilms = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    const mydata = response.data.results;
    console.log(mydata);
    dispatch({
      type: FETCH_FILM,
      payload: response.data.results,
    });
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
};

