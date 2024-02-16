import { FC } from "react";
import Form from "../form/Form";
import { Auth, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { setUser } from "../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleRegister = (email: string, password: string) => {
		const auth: Auth = getAuth();
		console.log(auth);

		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						//@ts-expect-error user содержит accesToken
						token: user.accessToken,
					})
				);
				navigate("/");
			})
			.catch(console.error);
	};

	return (
		<Form
			title="Sign Up"
			handleClick={handleRegister}
		/>
	);
};

export default SignUp;
