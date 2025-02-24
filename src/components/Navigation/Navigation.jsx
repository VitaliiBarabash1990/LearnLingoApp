import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = ({ items }) => {
	return (
		<nav className={s.nav}>
			<ul className={s.nav_list}>
				{items.map((item) => {
					if (!item.isPrint) return null;
					return (
						<li key={nanoid()} className={s.nav_link}>
							<NavLink to={item.goTo} className={s.nav_link_item}>
								{item.value}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navigation;
