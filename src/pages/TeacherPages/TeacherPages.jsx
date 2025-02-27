import { useEffect } from "react";
import s from "./TeacherPages.module.css";
import TeacherForm from "../../components/TeacherForm/TeacherForm.jsx";
import TeacherResultItem from "../../components/TeacherResultItem/TeacherResultItem.jsx";

const TeacherPages = () => {
	useEffect(() => {
		// document.body.style.background = "var(--background-1)";
		document.body.classList.add(s.bg_teacher);

		return () => {
			// document.body.style.background = "";
			document.body.classList.remove(s.bg_teacher);
		};
	}, []);

	return (
		<section className="section">
			<div className="container">
				<div className={s.teacher_wraper}>
					<div className={s.teacher_search}>
						<TeacherForm />
					</div>
					<ul className={s.teacher_result_list}>
						<li className={s.teacher_result_item}>
							<TeacherResultItem />
						</li>
						<li className={s.teacher_result_item}>
							<TeacherResultItem />
						</li>
						<li className={s.teacher_result_item}>
							<TeacherResultItem />
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default TeacherPages;
