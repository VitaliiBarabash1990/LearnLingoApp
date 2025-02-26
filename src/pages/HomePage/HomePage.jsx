import s from "./HomePage.module.css";

export default function HomePage() {
	const stats = [
		{ num: "32,000+", descr: "Experienced tutors" },
		{ num: "300,000+", descr: "5-star tutor reviews" },
		{ num: "120+", descr: "Subjects taught" },
		{ num: "200+", descr: "Tutor nationalities" },
	];

	return (
		<section className={`section ${s.home}`}>
			<div className="container">
				<ul className={s.hero}>
					<li className={s.hero_desc}>
						<h1 className={`title ${s.hero_title}`}>
							Unlock your potential with the best{" "}
							<span className={s.hero_title_accent}>language</span> tutors
						</h1>
						<p className={s.hero_text}>
							Embark on an Exciting Language Journey with Expert Language
							Tutors: Elevate your language proficiency to new heights by
							connecting with highly qualified and experienced tutors.
						</p>
						<button type="button" className={`button ${s.hero_btn}`}>
							Get started
						</button>
					</li>
					<li className={s.hero_image}>
						<img src="/people.svg" alt="people" className={s.hero_people} />
						<img src="/mac.svg" alt="mac" className={s.hero_mac} />
					</li>
				</ul>
				<ul className={s.stat_list}>
					{stats.map((stat, index) => (
						<li key={index} className={s.stat_item}>
							<h2 className={s.stat_title}>{stat.num}</h2>
							<p className={s.stat_text}>{stat.descr}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
