import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./Login.module.css";
import { useDispatch } from "react-redux";
import { LogIn } from "../../redux/auth/authOperations.js";
import { useState } from "react";

const Login = ({ closeModal }) => {
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);

	const loginData = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string()
			.min(8, "Password must be at least 8 characters")
			.required("Password is required"),
	});

	const handleSubmit = (value) => {
		const FormData = {
			email: value.email,
			password: value.password,
		};
		dispatch(LogIn(FormData));
		closeModal();
	};

	return (
		<Formik
			initialValues={loginData}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form className={s.form}>
				<div className={s.form_info}>
					<h3 className={`title ${s.login_title}`}>Log In</h3>
					<p className={s.login_text}>
						Welcome back! Please enter your credentials to access your account
						and continue your search for an teacher.
					</p>
				</div>
				<div className={s.input_list}>
					<div className={s.input_list_error}>
						<Field
							type="email"
							name="email"
							placeholder="Email"
							className={s.input_item}
						/>
						<div className={s.userSettings__errorMessage}>
							<ErrorMessage
								name="email"
								component="div"
								className={s.userSettings__errorText}
							/>
						</div>
					</div>
					<div className={s.input_list_error}>
						<Field
							type={showPassword ? "text" : "password"}
							name="password"
							placeholder="Password"
							className={s.input_item}
						/>
						<div className={s.userSettings__errorMessage}>
							<ErrorMessage
								name="password"
								component="div"
								className={s.userSettings__errorText}
							/>
						</div>
						<button
							type="button"
							className={s.password_btn}
							onClick={() => setShowPassword((prev) => !prev)}
						>
							<svg className={s.password_icon}>
								<use
									href={`/sprite.svg#${
										showPassword ? "icon-eye" : "icon-eye-off"
									}`}
								></use>
							</svg>
						</button>
					</div>
				</div>
				<button type="submit" className={s.login_btn}>
					Log In
				</button>
			</Form>
		</Formik>
	);
};

export default Login;
