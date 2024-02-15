import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
import { fetchNextPosts, fetchPosts } from "../../services/postService";
import { RootState } from "../store";

type LoadingState = "initial" | "fulfilled" | "pending" | "rejected";

interface postsState {
	posts: IPost[];
	page: number;
	limit: number;
	loadingState: LoadingState;
	nextLoadingState: LoadingState;
}

const initialState: postsState = {
	posts: [],
	page: 0,
	limit: 10,
	loadingState: "initial",
	nextLoadingState: "initial",
};

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: ({ addCase }) => {
		addCase(fetchPosts.pending, (state) => {
			state.loadingState = "pending";
		});

		addCase(fetchPosts.fulfilled, (state, action) => {
			state.posts = action.payload;
			state.loadingState = "fulfilled";
		});

		addCase(fetchPosts.rejected, (state) => {
			state.loadingState = "rejected";
		});

		addCase(fetchNextPosts.pending, (state) => {
			state.page = state.page + 1;
			state.nextLoadingState = "pending";
		});

		addCase(fetchNextPosts.fulfilled, (state, action) => {
			state.posts = state.posts.concat(action.payload);
			state.nextLoadingState = "fulfilled";
		});

		addCase(fetchNextPosts.rejected, (state) => {
			state.nextLoadingState = "rejected";
		});
	},
});

export const postsSelector = (state: RootState) => state.posts.posts;
export const postsLoadingSelector = (state: RootState) =>
	state.posts.loadingState;
export const postsNextLoadingSelector = (state: RootState) =>
	state.posts.nextLoadingState;
export default postsSlice.reducer;
