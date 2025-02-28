import { Field, Form, Formik } from "formik";
import s from "./Login.module.css";

const Login = () => {
	const loginData = {
		email: "",
		password: "",
	};
	return (
		<Formik initialValues={loginData} onSubmit={() => {}}>
			<Form className={s.form}>
				<div className={s.form_info}>
					<h3 className={`title ${s.login_title}`}>Log In</h3>
					<p className={s.login_text}>
						Welcome back! Please enter your credentials to access your account
						and continue your search for an teacher.
					</p>
				</div>
				<div className={s.input_list}>
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
					Log In
				</button>
			</Form>
		</Formik>
	);
};

export default Login;
