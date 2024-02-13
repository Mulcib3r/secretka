import { FC, useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../form/Form";
import { setUser } from "../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn: FC = () => {
	const [error, setError] = useState<string | null>(null);
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
				setError(null);
				navigate("/");
			})
			.catch((err) => {
				setError("Пользователь с таким email или password не найден");
			});
	};

	return (
		<>
			<Form
				title="Sign In"
				handleClick={handleLogin}
			>
				{error && <div>{error}</div>}
			</Form>
		</>
	);
};

export default SignIn;
