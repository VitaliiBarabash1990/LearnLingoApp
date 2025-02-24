import { nanoid } from "@reduxjs/toolkit";
import s from "./BurgerMenu.module.css";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const BurgerMenu = ({ header, items, isBrgOpen, setIsBrgOpen }) => {
	return (
		<div
			// className={isBrgOpen ? {`${s.burgerMenuMeinBox} ${s.active}`} : {s.burgerMenuMeinBox}}
			className={`${s.burgerMenuMeinBox} ${isBrgOpen ? s.active : ""}`}
			onClick={() => setIsBrgOpen(false)}
		>
			<div className={s.burgerMenuContent} onClick={(e) => e.stopPropagation()}>
				{header && <div className={s.burgerMenuHeader}>{header}</div>}
				<nav>
					<ul className={s.burgerMenuList}>
						{items.map((item) => {
							if (!item.isPrint) {
								return null;
							}
							return (
								<li key={nanoid()}>
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
				</nav>
				<button
					type="button"
					className={s.burgerMenuBtnExit}
					onClick={() => setIsBrgOpen(false)}
				>
					<FiX size={20} color="black" />
				</button>
			</div>
		</div>
	);
};

export default BurgerMenu;
