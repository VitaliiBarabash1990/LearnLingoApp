import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSelectors.js";

const Navigation = ({ items }) => {
	const { isAuth } = useSelector(selectAuth);
	const filteredItems = isAuth ? items : items.slice(0, -1);
	return (
		<nav className={s.nav}>
			<ul className={s.nav_list}>
				{filteredItems.map((item, index) => {
					if (!item.isPrint) return null;
					return (
						<li key={index} className={s.nav_link}>
							<NavLink
								to={item.goTo}
								className={({ isActive }) =>
									`${s.nav_link_item} ${isActive ? s.active : ""}`
								}
							>
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
