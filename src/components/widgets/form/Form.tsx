import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormProps } from "./form.props";

interface IFormInput {
	email: string;
	password: string;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		handleClick(data.email, data.password);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Email:
				<input
					{...register("email", {
						required: true,
					})}
					type="email"
				/>
			</label>
			<label>
				Password:
				<input
					{...register("password", {
						required: true,
					})}
					type="password"
				/>
			</label>
			<button type="submit">{title}</button>
		</form>
	);
};

export default Form;
