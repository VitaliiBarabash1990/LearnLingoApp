import { useEffect, useMemo, useState } from "react";
import s from "./TeacherForm.module.css";
import getUniqueValues from "../../help/getUniqueValues.js";

const TeacherForm = ({ teachers, setLanguage, setLevel, setPrice }) => {
	// const languages = getUniqueValues(teachers, "languages");
	// const levels = getUniqueValues(teachers, "levels");
	// const prices = getUniqueValues(teachers, "price_per_hour");

	// const languages = teachers ? getUniqueValues(teachers, "languages") : [];
	// const levels = teachers ? getUniqueValues(teachers, "levels") : [];
	// const prices = teachers ? getUniqueValues(teachers, "price_per_hour") : [];

	const languages = useMemo(
		() => (teachers ? getUniqueValues(teachers, "languages") : []),
		[teachers]
	);
	const levels = useMemo(
		() => (teachers ? getUniqueValues(teachers, "levels") : []),
		[teachers]
	);
	const prices = useMemo(
		() => (teachers ? getUniqueValues(teachers, "price_per_hour") : []),
		[teachers]
	);

	const [formData, setFormData] = useState({
		language: "-",
		level: "-",
		price: "-",
	});

	// useEffect(() => {
	// 	if (teachers) {
	// 		setFormData((prevFormData) => {
	// 			const newFormData = {
	// 				language: languages.length > 0 ? languages[0] : "-",
	// 				level: levels.length > 0 ? levels[0] : "-",
	// 				price: prices.length > 0 ? prices[0] : "-",
	// 			};
	// 			if (
	// 				prevFormData.language !== newFormData.language ||
	// 				prevFormData.level !== newFormData.level ||
	// 				prevFormData.price !== newFormData.price
	// 			) {
	// 				return newFormData;
	// 			}

	// 			return prevFormData;
	// 		});
	// 	}
	// }, [teachers, languages, levels, prices]);

	useEffect(() => {
		setFormData({
			language: "-",
			level: "-",
			price: "-",
		});
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
		setLanguage(newFormData.language);
		setLevel(newFormData.level);
		setPrice(newFormData.price);
	};

	// З button
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// };

	return (
		<form className={s.teacher_form}>
			<ul className={s.teacher_search_list}>
				<li className={s.teacher_search_item}>
					<label htmlFor="lang" className={s.teacher_label}>
						Languages
					</label>
					<select
						id="lang"
						name="language"
						value={formData.language || ""}
						onChange={handleChange}
						className={s.teacher_select}
					>
						<option value="-">-</option>
						{languages.map((lang, index) => (
							<option key={index} value={lang}>
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
						value={formData.level || ""}
						onChange={handleChange}
						className={s.teacher_select}
					>
						<option value="-">-</option>
						{levels.map((level, index) => (
							<option key={index} value={level}>
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
						value={formData.price || ""}
						onChange={handleChange}
						className={s.teacher_select}
					>
						<option value="-">-</option>
						{prices.map((price, index) => (
							<option key={index} value={price}>
								{price}
							</option>
						))}
					</select>
				</li>
			</ul>
		</form>
	);
};

export default TeacherForm;
