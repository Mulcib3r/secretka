import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { IPost } from "../models/IPost";

export const postApi = createApi({
	reducerPath: "posts",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	endpoints: (builder) => ({
		getPosts: builder.query<IPost[], void>({
			query: () => ({
				url: `/posts`,
			}),
		}),
	}),
});
