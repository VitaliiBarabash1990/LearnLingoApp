import { useEffect } from "react";
import s from "./BurgerMenu.module.css";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth.jsx";

const BurgerMenu = ({ items, isBrgOpen, setIsBrgOpen }) => {
	useEffect(() => {
		if (isBrgOpen) {
			document.documentElement.classList.add("no-scroll");
			document.body.classList.add("no-scroll");
		} else {
			document.documentElement.classList.remove("no-scroll");
			document.body.classList.remove("no-scroll");
		}
		return () => {
			document.documentElement.classList.remove("no-scroll");
			document.body.classList.remove("no-scroll");
		};
	}, [isBrgOpen]);

	return (
		<div
			className={`${s.burgerMenuMeinBox} ${isBrgOpen ? s.active : ""}`}
			onClick={() => setIsBrgOpen(false)}
		>
			<nav className={s.burgerMenuContent}>
				<ul className={s.burgerMenuList}>
					{items.map((item, index) => {
						if (!item.isPrint) {
							return null;
						}
						return (
							<li key={index} className={s.burger_menu}>
								<Link
									className={s.burgerMenuLink}
									to={item.goTo}
									onClick={() => setIsBrgOpen(false)}
								>
									{item.value}
								</Link>
							</li>
						);
					})}
				</ul>
				<Auth />
			</nav>
		</div>
	);
};

export default BurgerMenu;
