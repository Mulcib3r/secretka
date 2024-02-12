import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navigation}>
				<NavLink to="/">Главная</NavLink>
			</div>
			<div className={styles.navigation}>
				<NavLink to="login">Sign In</NavLink>
				<NavLink to="register">Sign Up</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
