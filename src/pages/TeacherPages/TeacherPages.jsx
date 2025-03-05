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
	const [language, setLanguage] = useState(false);
	const [level, setLevel] = useState(false);
	const [price, setPrice] = useState(false);

	const filtredTeachers = teachers.filter((teacher) => {
		// if (!language && !level && !price) {
		if (language === "-" && level === "-" && price === "-") {
			return true;
		}
		// const languageResult = !language || teacher.languages.includes(language);
		// const levelResult = !level || teacher.levels.includes(level);
		// const priceResult = !price || `${teacher.price_per_hour}` === price;
		// return languageResult && levelResult && priceResult;

		const languageResult =
			language === "-" || teacher.languages.includes(language);
		const levelResult = level === "-" || teacher.levels.includes(level);
		const priceResult = price === "-" || `${teacher.price_per_hour}` === price;
		return languageResult && levelResult && priceResult;
	});

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
						<TeacherForm
							teachers={teachers}
							setLanguage={(data) => setLanguage(data)}
							setLevel={(data) => setLevel(data)}
							setPrice={(data) => setPrice(data)}
						/>
					</div>

					{isLoading ? (
						<h3>Loading...</h3>
					) : filtredTeachers?.length !== 0 ? (
						<ul className={s.teacher_result_list}>
							{filtredTeachers
								?.slice(0, loadTeachersCount)
								.map((teacher, index) => (
									<li key={index} className={s.teacher_result_item}>
										<TeacherResultItem teacher={teacher} />
									</li>
								))}
						</ul>
					) : (
						<p>No teacher was found according to your criteria</p>
					)}

					{filtredTeachers?.length > loadTeachersCount && !isLoading && (
						<button
							type="button"
							onClick={handleLoadMore}
							className={s.load_btn}
						>
							Load more
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default TeacherPages;

{
	/* <ul className={s.teacher_result_list}>
						{teachers.map((teacher, index) => (
							<li key={index} className={s.teacher_result_item}>
								<TeacherResultItem teacher={teacher} />
							</li>
						))}
					</ul> */
}
