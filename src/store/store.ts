import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { postApi } from "../services/postService";

export const setupStore = () => {
	return configureStore({
		reducer: {
			user: userReducer,
			[postApi.reducerPath]: postApi.reducer,
		},
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware().concat(postApi.middleware);
		},
	});
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
