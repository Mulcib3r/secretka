import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import styles from "./layout.module.css";

const Layout = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<section className={styles.container}>
					<Outlet />
				</section>
			</main>
		</>
	);
};

export default Layout;
