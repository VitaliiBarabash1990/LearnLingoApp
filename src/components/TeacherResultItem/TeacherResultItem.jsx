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
			</div>
		</div>
	);
};

export default TeacherResultItem;
