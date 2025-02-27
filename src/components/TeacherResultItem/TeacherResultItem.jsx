import { useState } from "react";
import s from "./TeacherResultItem.module.css";

const TeacherResultItem = () => {
	const [isOnline, setIsOnline] = useState(true);
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

				<button type="button" className={s.more_btn}>
					Read more
				</button>

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
			</div>
		</div>
	);
};

export default TeacherResultItem;
