import { configureStore } from "@reduxjs/toolkit";
import combinereduer from "../redux";

const store = configureStore({
  reducer: combinereduer,
});

export default store;
