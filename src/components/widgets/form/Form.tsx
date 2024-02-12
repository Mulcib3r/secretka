import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
	email: string;
	passwod: string;
}

const Form: FC = () => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				Email:
				<input
					{...register("email", {
						required: true,
						maxLength: 20,
						minLength: 5,
					})}
					type="email"
					name="email"
				/>
			</label>
			<label>
				Password:
				<input
					{...register("email", {
						required: true,
						maxLength: 20,
						minLength: 7,
					})}
					type="password"
					name="password"
				/>
			</label>
			<button type="submit"></button>
		</form>
	);
};

export default Form;
