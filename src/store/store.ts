// store.ts
import { configureStore } from "@reduxjs/toolkit";
import formReducer, { setFormData } from "./formSlice";

const storedData = localStorage.getItem("formdata");
const initialState = {
  form: {
    formData: storedData ? JSON.parse(storedData) : [],
  },
};

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState: initialState,
});

if (!storedData) {
  store.dispatch(setFormData([]));
}

export default store;
