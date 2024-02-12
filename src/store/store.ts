import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

export const setupStore = () => {
	return configureStore({
		reducer: { user: userReducer },
	});
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
