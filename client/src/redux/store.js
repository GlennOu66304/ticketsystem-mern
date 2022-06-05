import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './auth/slice'

import userReducer from "./auth/slice1";



const store = configureStore({
  reducer: {
    user:userReducer
  },

  devTools: true, //enable the redux dev tool
});



export default store
