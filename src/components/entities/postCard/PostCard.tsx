import { FC } from "react";
import styles from "./postCard.module.css";
import { postCardProps } from "./postCard.props";
import { Link } from "react-router-dom";

const PostCard: FC<postCardProps> = ({ post }) => {
	return (
		<article className={styles.postCard}>
			<h2>{`${post.id}. ${post.title}`}</h2>
			<p className={styles.text}>{post.body}</p>
			<Link
				to={`post/${post.id}`}
				className={styles.link}
			>
				подробнее
			</Link>
		</article>
	);
};

export default PostCard;
