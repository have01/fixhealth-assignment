// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    // Add other reducers here if needed
  },
});
