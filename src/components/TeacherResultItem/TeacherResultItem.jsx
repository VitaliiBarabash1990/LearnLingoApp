import { useState } from "react";
import s from "./TeacherResultItem.module.css";
import Modal from "../Modal/Modal.jsx";
import BookTrialLesson from "../BookTrialLesson/BookTrialLesson.jsx";

const TeacherResultItem = () => {
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
				<img src="/Avatar.png" alt="avatar" className={s.avatar} />
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
						<p className={s.head_style}>Lessons done: 1098</p>
						<svg className={s.separate}>
							<use href="/sprite.svg#icon-vertical-line"></use>
						</svg>
						<div className={s.lesson}>
							<svg className={s.leson_star}>
								<use href="/sprite.svg#icon-star"></use>
							</svg>
							<p className={s.head_style}>Rating: 4.8</p>
						</div>
						<svg className={s.separate}>
							<use href="/sprite.svg#icon-vertical-line"></use>
						</svg>
						<p className={s.head_style}>
							Price / 1 hour: <span className={s.head_style_dolar}>30$</span>
						</p>
						<button type="button" className={s.favorite_btn}>
							<svg className={s.btn_heart}>
								<use href="/sprite.svg#icon-heart"></use>
							</svg>
						</button>
					</div>
				</div>

				<h2 className={`title ${s.teacher_name}`}>Jane Smith</h2>
				<ul className={s.teacher_info}>
					<li className={`title ${s.info_style}`}>
						Speaks: <p className={s.info_text}>German, French</p>
					</li>
					<li className={`title ${s.info_style}`}>
						Lesson Info:{" "}
						<p className={s.info_text}>
							Lessons are structured to cover grammar, vocabulary, and practical
							usage of the language.
						</p>
					</li>
					<li className={`title ${s.info_style}`}>
						Conditions:{" "}
						<p className={s.info_text}>
							Welcomes both adult learners and teenagers (13 years and
							above).Provides personalized study plans.
						</p>
					</li>
				</ul>

				{isRead && (
					<div className={s.more_descr}>
						<p className={s.more_descr_text}>
							Jane is an experienced and dedicated language teacher specializing
							in German and French. She holds a Bachelor`s degree in German
							Studies and a Master`s degree in French Literature. Her passion
							for languages and teaching has driven her to become a highly
							proficient and knowledgeable instructor. With over 10 years of
							teaching experience, Jane has helped numerous students of various
							backgrounds and proficiency levels achieve their language learning
							goals. She is skilled at adapting her teaching methods to suit the
							needs and learning styles of her students, ensuring that they feel
							supported and motivated throughout their language journey.
						</p>
						<ul className={s.reviews_list}>
							<li className={s.reviews_item}>
								<div className={s.reviews_people}>
									<img
										src="/reviews_avatar.png"
										alt="avatar"
										className={s.reviews_avatar}
									/>
									<div>
										<h4 className={`title ${s.reviews_title}`}>Frank</h4>
										<div className={s.reviews_info}>
											<svg className={s.reviews_icon}>
												<use href="/sprite.svg#icon-star"></use>
											</svg>
											<p className={s.reviews_rating}>4.0</p>
										</div>
									</div>
								</div>
								<p className={s.reviews_text}>
									Jane`s lessons were very helpful. I made good progress.
								</p>
							</li>

							<li className={s.reviews_item}>
								<div className={s.reviews_people}>
									<img
										src="/reviews_avatar.png"
										alt="avatar"
										className={s.reviews_avatar}
									/>
									<div>
										<h4 className={`title ${s.reviews_title}`}>Frank</h4>
										<div className={s.reviews_info}>
											<svg className={s.reviews_icon}>
												<use href="/sprite.svg#icon-star"></use>
											</svg>
											<p className={s.reviews_rating}>4.0</p>
										</div>
									</div>
								</div>
								<p className={s.reviews_text}>
									Jane`s lessons were very helpful. I made good progress.
								</p>
							</li>
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
					<li className={`${s.level_item} ${s.active}`}>
						<p className={`title ${s.level_item_text}`}>#A1 Beginner</p>
					</li>
					<li className={s.level_item}>
						<p className={`title ${s.level_item_text}`}>#A2 Elementary</p>
					</li>
					<li className={s.level_item}>
						<p className={`title ${s.level_item_text}`}>#B1 Intermediate</p>
					</li>
					<li className={s.level_item}>
						<p className={`title ${s.level_item_text}`}>
							#B2 Upper-Intermediate
						</p>
					</li>
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
