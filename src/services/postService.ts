import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../models/IPost";
import axios from "axios";
import { RootState } from "../store/store";

const BAZA_URL = "https://jsonplaceholder.typicode.com/";

export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async (_, { getState }) => {
		const state = getState() as RootState;
		const response = await axios.get<IPost[]>(
			`/posts?_page=${state.posts.page}?_limit=10`,
			{
				baseURL: BAZA_URL,
			}
		);
		return {
			data: response.data,
			totalCount: response.headers["x-total-count"],
		};
	}
);
export const fetchNextPosts = createAsyncThunk(
	"posts/fetchNextPosts",
	async (_, { getState }) => {
		const state = getState() as RootState;
		const response = await axios.get<IPost[]>(
			`/posts?_page=${state.posts.page}?_limit=10`,
			{
				baseURL: BAZA_URL,
			}
		);
		return {
			data: response.data,
			totalCount: response.headers["x-total-count"],
		};
	}
);
