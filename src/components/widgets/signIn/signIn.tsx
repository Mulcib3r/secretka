import { FC } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
	Auth,
	UserCredential,
	getAuth,
	signInWithEmailAndPassword,
} from "firebase/auth";
import Form from "../form/Form";
import { FirebaseError } from "firebase/app";

const SignIn: FC = () => {
	const dispatch = useAppDispatch();

	const handleLogin = (email: string, password: string): void => {
		const auth: Auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(console.log)
			.catch(console.error);
	};

	return (
		<Form
			title="Sign In"
			handleClick={handleLogin}
		/>
	);
};

export default SignIn;
