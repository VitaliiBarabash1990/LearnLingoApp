import { Field, Form, Formik } from "formik";
import s from "./Registration.module.css";

const Registration = () => {
	const loginData = {
		name: "",
		email: "",
		password: "",
	};
	return (
		<Formik initialValues={loginData} onSubmit={() => {}}>
			<Form className={s.form}>
				<div className={s.form_info}>
					<h3 className={`title ${s.login_title}`}>Registration</h3>
					<p className={s.login_text}>
						Thank you for your interest in our platform! In order to register,
						we need some information. Please provide us with the following
						information
					</p>
				</div>
				<div className={s.input_list}>
					<Field
						type="name"
						name="name"
						placeholder="Name"
						className={s.input_item}
					/>
					<Field
						type="email"
						name="email"
						placeholder="Email"
						className={s.input_item}
					/>
					<Field
						type="password"
						name="password"
						placeholder="Password"
						className={s.input_item}
					/>
				</div>
				<button type="submit" className={s.login_btn}>
					Sign Up
				</button>
			</Form>
		</Formik>
	);
};

export default Registration;
