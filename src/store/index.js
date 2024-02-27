import { compose, configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({reducer}, composeEnhancers(applyMiddleware(thunk)));

export default store;
