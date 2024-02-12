import { FC } from "react";
import styles from "./header.module.css";
import Navbar from "../navbar/Navbar";

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
