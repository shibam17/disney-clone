import { combineReducers, configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import { userReducer } from "../features/user/userSlice";
// import userSlice from "../features/user/userSlice";

const reducer = combineReducers({
  movie: movieReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer,
});
