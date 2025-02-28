import { Field, Form, Formik } from "formik";
import s from "./BookTrialLesson.module.css";

const BookTrialLesson = () => {
	return (
		<Formik>
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
				<ul className={s.trial_group_radio}>
					<li className={s.trial_radio_item}>
						<Field type="radio" name="reason" value="carrer" />
						<p>Career and business</p>
					</li>
					<li className={s.trial_radio_item}>
						<Field type="radio" name="reason" value="lesson" />
						<p>Lesson for kids</p>
					</li>
					<li className={s.trial_radio_item}>
						<Field type="radio" name="reason" value="living" />
						<p>Living abroad</p>
					</li>
					<li className={s.trial_radio_item}>
						<Field type="radio" name="reason" value="exams" />
						<p>Exams and coursework</p>
					</li>
					<li className={s.trial_radio_item}>
						<Field type="radio" name="reason" value="culture" />
						<p>Culture, travel or hobby</p>
					</li>
				</ul>

				<ul className={s.trial_input_list}>
					<li className={s.trial_input_item}>
						<Field
							type="name"
							name="name"
							placeholder="Name"
							className={s.input_item}
						/>
					</li>
					<li className={s.trial_input_item}>
						<Field
							type="name"
							name="name"
							placeholder="Name"
							className={s.input_item}
						/>
					</li>
					<li className={s.trial_input_item}>
						<Field
							type="name"
							name="name"
							placeholder="Name"
							className={s.input_item}
						/>
					</li>
				</ul>

				<button type="button" className={s.trial_btn}>
					Book
				</button>
			</Form>
		</Formik>
	);
};

export default BookTrialLesson;
