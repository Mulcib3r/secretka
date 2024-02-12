import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import styles from "./layout.module.css";

const Layout = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<Outlet />
				</div>
			</main>
		</>
	);
};

export default Layout;
