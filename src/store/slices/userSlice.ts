import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

const initialState: IUser = {
	email: null,
	id: null,
	token: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.token = action.payload.token;
		},
		removerUser: (state) => {
			state.email = null;
			state.id = null;
			state.token = null;
		},
	},
});

export const { removerUser, setUser } = userSlice.actions;
export default userSlice.reducer;
