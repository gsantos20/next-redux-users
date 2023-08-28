import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users";

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
