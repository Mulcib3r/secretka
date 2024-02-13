import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { removerUser } from "../../store/slices/userSlice";

const Navbar = () => {
	const { isAuth } = useAuth();
	const dispatch = useAppDispatch();
	return (
		<nav className={styles.navbar}>
			<div className={styles.navigation}>
				<NavLink to="/">Главная</NavLink>
			</div>
			<div className={styles.navigation}>
				{isAuth ? (
					<button
						className={styles.loguot}
						onClick={() => dispatch(removerUser())}
					>
						Log Out
					</button>
				) : (
					<>
						<NavLink to="login">Sign In</NavLink>
						<NavLink to="register">Sign Up</NavLink>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
