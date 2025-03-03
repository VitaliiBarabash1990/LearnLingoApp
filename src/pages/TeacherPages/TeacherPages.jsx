import { useEffect, useState } from "react";
import s from "./TeacherPages.module.css";
import TeacherForm from "../../components/TeacherForm/TeacherForm.jsx";
import TeacherResultItem from "../../components/TeacherResultItem/TeacherResultItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTeachers } from "../../redux/teachers/teachersSelectors.js";
import { getTeachers } from "../../redux/teachers/teachersOperations.js";

const TeacherPages = () => {
	const dispatch = useDispatch();
	const { teachers, isLoading } = useSelector(selectTeachers);

	const [loadTeachersCount, setLoadTeachersCount] = useState(4);
	console.log("loadTeachersCount", loadTeachersCount);

	useEffect(() => {
		// document.body.style.background = "var(--background-1)";
		document.body.classList.add(s.bg_teacher);

		return () => {
			// document.body.style.background = "";
			document.body.classList.remove(s.bg_teacher);
		};
	}, []);

	useEffect(() => {
		dispatch(getTeachers());
	}, [dispatch]);

	const handleLoadMore = () => {
		setLoadTeachersCount((prevCount) => prevCount + 4);
	};

	return (
		<section className="section">
			<div className="container">
				<div className={s.teacher_wraper}>
					<div className={s.teacher_search}>
						<TeacherForm />
					</div>
					<ul className={s.teacher_result_list}>
						{teachers.map((teacher, index) => (
							<li key={index} className={s.teacher_result_item}>
								<TeacherResultItem teacher={teacher} />
							</li>
						))}
					</ul>
					<button type="button" onClick={handleLoadMore} className={s.load_btn}>
						Load more
					</button>
				</div>
			</div>
		</section>
	);
};

export default TeacherPages;
