import { ReactNode } from "react";

export interface FormProps {
	title: string;
	handleClick: (email: string, password: string) => void;
	children?: ReactNode;
}
