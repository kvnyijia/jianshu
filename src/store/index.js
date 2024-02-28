import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
  reducer, 
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,  // Disable the warnings of `A non-serializable value was detected`
  }),
});

export default store;
