import { useState } from "react";
import s from "./TeacherResultItem.module.css";
import Modal from "../Modal/Modal.jsx";
import BookTrialLesson from "../BookTrialLesson/BookTrialLesson.jsx";

const TeacherResultItem = ({ teacher }) => {
	const [isRead, setIsRead] = useState(false);
	const [isTrial, setIsTrial] = useState(false);
	const isOnline = true;
	console.log(isRead);

	const closeModal = () => {
		setIsTrial(false);
	};

	return (
		<div className={s.result_wrapper}>
			<div className={s.avatar_wrap}>
				<svg className={isOnline ? s.online : s.offline}>
					<use href="/sprite.svg#icon-online"></use>
				</svg>
				<img src={teacher.avatar_url} alt="avatar" className={s.avatar} />
			</div>

			<div className={s.result_description}>
				<div className={s.descr_head}>
					<p className={`${s.head_style} ${s.head_style_gray}`}>Languages</p>
					<div className={s.rating}>
						<div className={s.lesson}>
							<svg className={s.leson_icon}>
								<use href="/sprite.svg#icon-book"></use>
							</svg>
							<p className={s.head_style}>Lessons online</p>
						</div>
						<svg className={s.separate}>
							<use href="/sprite.svg#icon-vertical-line"></use>
						</svg>
						<p className={s.head_style}>Lessons done: {teacher.lessons_done}</p>
						<svg className={s.separate}>
							<use href="/sprite.svg#icon-vertical-line"></use>
						</svg>
						<div className={s.lesson}>
							<svg className={s.leson_star}>
								<use href="/sprite.svg#icon-star"></use>
							</svg>
							<p className={s.head_style}>Rating: {teacher.rating}</p>
						</div>
						<svg className={s.separate}>
							<use href="/sprite.svg#icon-vertical-line"></use>
						</svg>
						<p className={s.head_style}>
							Price / 1 hour:{" "}
							<span className={s.head_style_dolar}>
								{teacher.price_per_hour}$
							</span>
						</p>
						<button type="button" className={s.favorite_btn}>
							<svg className={s.btn_heart}>
								<use href="/sprite.svg#icon-heart"></use>
							</svg>
						</button>
					</div>
				</div>

				<h2 className={`title ${s.teacher_name}`}>
					{teacher.name} {teacher.surname}
				</h2>
				<ul className={s.teacher_info}>
					<li className={`title ${s.info_style}`}>
						Speaks:{" "}
						<p className={s.info_text}>
							{teacher.languages.map((language, index, arr) =>
								index === arr.length - 1 ? language : language + ", "
							)}
						</p>
					</li>
					<li className={`title ${s.info_style}`}>
						Lesson Info: <p className={s.info_text}>{teacher.lesson_info}</p>
					</li>
					<li className={`title ${s.info_style}`}>
						Conditions:{" "}
						<p className={s.info_text}>
							{teacher.conditions.map((text) => text + " ")}
						</p>
					</li>
				</ul>

				{isRead && (
					<div className={s.more_descr}>
						<p className={s.more_descr_text}>{teacher.experience}</p>
						<ul className={s.reviews_list}>
							{teacher.reviews.map((review, index) => (
								<li key={index} className={s.reviews_item}>
									<div className={s.reviews_people}>
										<img
											src="/reviews_avatar.png"
											alt="avatar"
											className={s.reviews_avatar}
										/>
										<div>
											<h4 className={`title ${s.reviews_title}`}>
												{review.reviewer_name}
											</h4>
											<div className={s.reviews_info}>
												<svg className={s.reviews_icon}>
													<use href="/sprite.svg#icon-star"></use>
												</svg>
												<p className={s.reviews_rating}>
													{review.reviewer_rating}.0
												</p>
											</div>
										</div>
									</div>
									<p className={s.reviews_text}>{review.comment}</p>
								</li>
							))}
						</ul>
					</div>
				)}

				{isRead ? (
					""
				) : (
					<button
						type="button"
						className={s.more_btn}
						onClick={() => setIsRead(true)}
					>
						Read more
					</button>
				)}

				<ul className={s.teacher_level}>
					{teacher.levels.map((level, index) => (
						<li
							key={index}
							className={`${s.level_item} ${index === 0 ? s.active : ""}`}
						>
							<p className={`title ${s.level_item_text}`}>{level}</p>
						</li>
					))}
				</ul>

				{isRead && (
					<button
						type="button"
						className={s.trial_btn}
						onClick={() => {
							setIsTrial(true);
						}}
					>
						Book trial lesson
					</button>
				)}
				{isTrial && (
					<Modal closeModal={closeModal}>
						<BookTrialLesson />
					</Modal>
				)}
			</div>
		</div>
	);
};

export default TeacherResultItem;
