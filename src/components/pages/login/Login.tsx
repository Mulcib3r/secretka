import { FC } from "react";
import styles from "./login.module.css";
import SignIn from "../../widgets/signIn/SignIn";

const Login: FC = () => {
	return (
		<div className={styles.login}>
			<SignIn />
		</div>
	);
};

export default Login;
