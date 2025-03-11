import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./Registration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSelectors.js";
import { SignUp } from "../../redux/auth/authOperations.js";
import { useState } from "react";

const Registration = ({ closeModal }) => {
	const dispatch = useDispatch();
	const { isAuthLoading, isError } = useSelector(selectAuth);
	const [showPassword, setShowPassword] = useState(false);

	const registerData = {
		name: "",
		email: "",
		password: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string()
			.min(3, "Name must be at least 3 characters long")
			.max(20, "Name must not exceed 20 characters")
			.required(),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		password: Yup.string()
			.min(8, "Password must be at least 8 characters")
			.required("Password is required"),
	});

	const handleSubmit = async (values) => {
		const formData = {
			name: values.name,
			email: values.email,
			password: values.password,
		};
		await dispatch(SignUp(formData));
		closeModal();
	};

	return (
		<Formik
			initialValues={registerData}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form className={s.form}>
				<div className={s.form_info}>
					<h3 className={`title ${s.register_title}`}>Registration</h3>
					<p className={s.register_text}>
						Thank you for your interest in our platform! In order to register,
						we need some information. Please provide us with the following
						information
					</p>
				</div>
				<div className={s.input_list}>
					<div className={s.input_list_error}>
						<Field
							type="name"
							name="name"
							placeholder="Name"
							className={s.input_item}
						/>
						<div className={s.userSettings__errorMessage}>
							<ErrorMessage
								name="name"
								component="div"
								className={s.userSettings__errorText}
							/>
						</div>
					</div>
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
				<button
					type="submit"
					className={s.register_btn}
					disabled={isAuthLoading}
				>
					Sign Up
				</button>
				{isError && <p style={{ color: "red" }}>{isError}</p>}
			</Form>
		</Formik>
	);
};

export default Registration;
