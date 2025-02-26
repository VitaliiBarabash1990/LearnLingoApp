import { useEffect, useState } from "react";
import s from "./TeacherPages.module.css";

const languages = ["French", "English", "German", "Ukrainian", "Polish"];
const levels = [
	"A1 Beginner",
	"A2 Elementary",
	"B1 Intermediate",
	"B2 Upper-Intermediate",
];
const prices = ["10", "20", "30", "40"];

const TeacherPages = () => {
	const [formData, setFormData] = useState({
		language: languages[0].toLowerCase(),
		level: levels[0].toLowerCase(),
		price: prices[0].toLowerCase(),
	});
	useEffect(() => {
		// document.body.style.background = "var(--background-1)";
		document.body.classList.add(s.bg_teacher);

		return () => {
			// document.body.style.background = "";
			document.body.classList.remove(s.bg_teacher);
		};
	}, []);

	const handleChange = (event) => {
		// З button
		// setFormData({
		// 	...formData,
		// 	[event.target.name]: event.target.value,
		// });

		// без button
		const newFormData = {
			...formData,
			[event.target.name]: event.target.value,
		};
		setFormData(newFormData);
		console.log("Оновлені дані форми:", newFormData);
	};

	// З button
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log("Дані форми:", formData);
	// };

	return (
		<section className="section">
			<div className="container">
				<ul className={s.teacher_wraper}>
					<li className={s.teacher_search}>
						<form className={s.teacher_form}>
							<ul className={s.teacher_search_list}>
								<li className={s.teacher_search_item}>
									<label htmlFor="lang" className={s.teacher_label}>
										Languages
									</label>
									<select
										id="lang"
										name="language"
										value={formData.language}
										onChange={handleChange}
										className={s.teacher_select}
									>
										{languages.map((lang, index) => (
											<option key={index} value={lang.toLowerCase()}>
												{lang}
											</option>
										))}
									</select>
								</li>

								<li className={s.teacher_search_item}>
									<label htmlFor="level" className={s.teacher_label}>
										Level of knowledge
									</label>
									<select
										id="level"
										name="level"
										value={formData.level}
										onChange={handleChange}
										className={s.teacher_select}
									>
										{levels.map((level, index) => (
											<option key={index} value={level.toLowerCase()}>
												{level}
											</option>
										))}
									</select>
								</li>

								<li className={s.teacher_search_item}>
									<label htmlFor="price" className={s.teacher_label}>
										Price
									</label>
									<select
										id="price"
										name="price"
										value={formData.price}
										onChange={handleChange}
										className={s.teacher_select}
									>
										{prices.map((price, index) => (
											<option key={index} value={price.toLowerCase()}>
												{price}
											</option>
										))}
									</select>
								</li>
							</ul>
						</form>
					</li>
					<li className={s.teacher_result}></li>
				</ul>
			</div>
		</section>
	);
};

export default TeacherPages;
