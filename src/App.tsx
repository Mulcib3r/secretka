import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login";

function App(): JSX.Element {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="register"
					element={<Register />}
				/>
				<Route
					path="login"
					element={<Login />}
				/>
				<Route
					path="*"
					element={<div>Not found</div>}
				/>
			</Route>
		</Routes>
	);
}

export default App;
