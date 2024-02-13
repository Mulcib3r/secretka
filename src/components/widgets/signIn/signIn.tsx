import { FC } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../form/Form";
import { setUser } from "../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleLogin = (email: string, password: string): void => {
		const auth: Auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				);
				navigate("/");
			})
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
