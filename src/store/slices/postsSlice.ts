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
	totalCount: number;
}

const initialState: postsState = {
	posts: [],
	page: 1,
	limit: 12,
	loadingState: "initial",
	nextLoadingState: "initial",
	totalCount: 0,
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
			state.posts = action.payload.data;
			state.totalCount = action.payload.totalCount;
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
			state.posts = state.posts.concat(action.payload.data);
			state.totalCount = action.payload.totalCount;
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
export const postsTotalCountSelector = (state: RootState) =>
	state.posts.totalCount;
export const postsNextLoadingSelector = (state: RootState) =>
	state.posts.nextLoadingState;
export default postsSlice.reducer;
