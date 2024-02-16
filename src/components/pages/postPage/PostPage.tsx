import { Link, useParams } from "react-router-dom";
import styles from "./postPage.module.css";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { postsSelector } from "../../../store/slices/postsSlice";

const PostPage = () => {
	const { id } = useParams<string>();
	const posts = useAppSelector(postsSelector);
	return (
		<section className={styles.post_page}>
			<Link
				className={styles.link}
				to="/"
			>
				◄
			</Link>
			<h1>
				{posts[Number(id) - 1].id}. {posts[Number(id) - 1].title}
			</h1>
			<p>{posts[Number(id) - 1].body}</p>
		</section>
	);
};

export default PostPage;
