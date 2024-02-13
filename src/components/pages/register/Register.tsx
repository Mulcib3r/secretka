import { FC } from "react";
import styles from "./register.module.css";
import SignUp from "../../widgets/signUp/SignUp";

const Register: FC = () => {
	return (
		<div className={styles.register}>
			<SignUp />
		</div>
	);
};

export default Register;
