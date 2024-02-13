import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormProps } from "./form.props";
import styles from "./from.module.css";

interface IFormInput {
	email: string;
	password: string;
}

const Form: FC<FormProps> = ({ title, handleClick, children }) => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		handleClick(data.email, data.password);
	};
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<label className={styles.email}>
				Email
				<input
					{...register("email", {
						required: true,
					})}
					type="email"
				/>
			</label>
			<label className={styles.password}>
				Password
				<input
					{...register("password", {
						required: true,
					})}
					type="password"
				/>
			</label>
			<button
				className={styles.button}
				type="submit"
			>
				{title}
			</button>
			{children}
		</form>
	);
};

export default Form;
