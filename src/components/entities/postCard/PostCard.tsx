import { FC } from "react";
import styles from "./postCard.module.css";
import { postCardProps } from "./postCard.props";

const PostCard: FC<postCardProps> = ({ post }) => {
	return (
		<article className={styles.postCard}>
			<h2>{`${post.id}. ${post.title}`}</h2>
			<p className={styles.text}>{post.body}</p>
		</article>
	);
};

export default PostCard;
