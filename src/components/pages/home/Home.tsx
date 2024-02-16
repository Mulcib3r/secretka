import { FC, useEffect } from "react";
import styles from "./home.module.css";
import { useAuth } from "../../../hooks/useAuth";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
	postsLoadingSelector,
	postsNextLoadingSelector,
	postsSelector,
	postsTotalCountSelector,
} from "../../../store/slices/postsSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { fetchNextPosts, fetchPosts } from "../../../services/postService";
import InfiniteScroll from "react-infinite-scroller";
import PostCard from "../../entities/postCard/PostCard";

const Home: FC = () => {
	const dispatch = useAppDispatch();
	const { isAuth } = useAuth();

	const posts = useAppSelector(postsSelector);
	const loadingState = useAppSelector(postsLoadingSelector);
	const nextLoadingState = useAppSelector(postsNextLoadingSelector);
	const totalCount = useAppSelector(postsTotalCountSelector);

	useEffect(() => {
		if (posts.length === 0) {
			dispatch(fetchPosts());
		}
	}, [dispatch, posts.length]);

	function loadMore() {
		if (nextLoadingState !== "pending") {
			dispatch(fetchNextPosts());
		}
	}

	const refetch = () => {
		dispatch(fetchPosts());
	};

	if (loadingState === "rejected") {
		return (
			<div>
				<h1>Произошла ошибка!</h1>
				<button onClick={refetch}>загрузить котиков</button>
			</div>
		);
	}

	if (loadingState === "pending") {
		return <h1>Loading...</h1>;
	}

	return isAuth ? (
		<>
			<InfiniteScroll
				className={styles.home}
				loadMore={loadMore}
				hasMore={totalCount - posts.length > 0}
			>
				{posts?.map((post) => (
					<PostCard
						key={post.id}
						post={post}
					/>
				))}
			</InfiniteScroll>
			{nextLoadingState === "pending" && <div>Loading..</div>}
			{nextLoadingState === "rejected" && (
				<div>
					<h1>Произошла ошибка!</h1>
					<button onClick={refetch}>загрузить котиков</button>
				</div>
			)}
		</>
	) : (
		<h1>Пожалуйста авторизируйтесь</h1>
	);
};

export default Home;
