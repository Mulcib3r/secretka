import { useAppSelector } from "./useAppSelector";

// Покажет авторизован ли пользователь
export function useAuth() {
	const { email, id, token } = useAppSelector((state) => state.user);

	return {
		isAuth: !!email,
		email,
		id,
		token,
	};
}
