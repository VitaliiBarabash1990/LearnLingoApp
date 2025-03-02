import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./BookTrialLesson.module.css";

const BookTrialLesson = () => {
	const initialValue = {
		reason: "",
		name: "",
		email: "",
		phone: "",
	};

	const phoneNumberRules = /^(\+380\d{9})$/;
	const validationSchema = Yup.object({
		reason: Yup.string().required(),
		name: Yup.string()
			.min(3, "Name must be at least 3 characters long")
			.max(20, "Name must not exceed 20 characters")
			.required(),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		phone: Yup.string()
			.matches(phoneNumberRules, { message: "Incorrect phone number!" })
			.required("Enter the number in the format +380123456789 without spaces!"),
	});

	const handleSubmit = (values) => {
		const dataForm = {
			reason: values.reason,
			name: values.name,
			email: values.email,
			phone: values.phone,
		};

		console.log("dataForm", dataForm);
	};

	return (
		<Formik
			initialValues={initialValue}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form className={s.form}>
				<h2 className={`title ${s.trial_title}`}>Book trial lesson</h2>
				<p className={s.trial_text}>
					Our experienced tutor will assess your current language level, discuss
					your learning goals, and tailor the lesson to your specific needs.
				</p>

				<div className={s.trial_avatar}>
					<img src="/Avatar.png" alt="avatar" className={s.trial_avatar_img} />
					<div className={s.trial_avatar_info}>
						<h5 className={`title ${s.teacher_title}`}>Your teacher</h5>
						<h4 className={`title ${s.teacher_name}`}>Jane Smith</h4>
					</div>
				</div>

				<h3 className={`title ${s.trial_radio_title}`}>
					What is your main reason for learning English?
				</h3>
				<div className={s.trial_group_radio}>
					<label className={s.trial_radio_item}>
						<Field
							type="radio"
							name="reason"
							value="carrer"
							className={s.trial_btn_radio}
						/>
						<span className={s.trial_radioBtn}></span>
						<p>Career and business</p>
					</label>
					<label className={s.trial_radio_item}>
						<Field
							type="radio"
							name="reason"
							value="lesson"
							className={s.trial_btn_radio}
						/>
						<span className={s.trial_radioBtn}></span>
						<p>Lesson for kids</p>
					</label>
					<label className={s.trial_radio_item}>
						<Field
							type="radio"
							name="reason"
							value="living"
							className={s.trial_btn_radio}
						/>
						<span className={s.trial_radioBtn}></span>
						<p>Living abroad</p>
					</label>
					<label className={s.trial_radio_item}>
						<Field
							type="radio"
							name="reason"
							value="exams"
							className={s.trial_btn_radio}
						/>
						<span className={s.trial_radioBtn}></span>
						<p>Exams and coursework</p>
					</label>
					<label className={s.trial_radio_item}>
						<Field
							type="radio"
							name="reason"
							value="culture"
							className={s.trial_btn_radio}
						/>
						<span className={s.trial_radioBtn}></span>
						<p>Culture, travel or hobby</p>
					</label>
				</div>

				<ul className={s.trial_input_list}>
					<li className={`${s.trial_input_item} ${s.input_list_error}`}>
						<Field
							type="name"
							name="name"
							placeholder="Full Name"
							className={s.input_item}
						/>
						<div className={s.userSettings__errorMessage}>
							<ErrorMessage
								name="name"
								component="div"
								className={s.userSettings__errorText}
							/>
						</div>
					</li>
					<li className={`${s.trial_input_item} ${s.input_list_error}`}>
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
					</li>
					<li className={`${s.trial_input_item} ${s.input_list_error}`}>
						<Field
							type="phone"
							name="phone"
							placeholder="Phone number"
							className={s.input_item}
						/>
						<div className={s.userSettings__errorMessage}>
							<ErrorMessage
								name="phone"
								component="div"
								className={s.userSettings__errorText}
							/>
						</div>
					</li>
				</ul>

				<button type="submit" className={s.trial_btn}>
					Book
				</button>
			</Form>
		</Formik>
	);
};

export default BookTrialLesson;
