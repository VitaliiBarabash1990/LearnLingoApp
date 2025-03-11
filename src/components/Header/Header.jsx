// import { useState } from "react";
import { useSelector } from "react-redux";
import Auth from "../Auth/Auth.jsx";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import s from "./Header.module.css";
import { selectAuth } from "../../redux/auth/authSelectors.js";
import BurgerMenuBtn from "../UI/BurgerMenuBtn/BurgerMenuBtn.jsx";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const Header = () => {
	const { isAuth } = useSelector(selectAuth);
	const [isBrgOpen, setIsBrgOpen] = useState(false);

	const items = [
		{ value: "Home", goTo: "/", isPrint: true },
		{ value: "Teachers", goTo: "/teachers", isPrint: true },
		{ value: "Favorites", goTo: "/favorites", isPrint: isAuth },
	];

	return (
		<>
			<header className={`section ${s.header}`}>
				<div className="container">
					<div className={s.header_wraper}>
						<Logo />
						<BurgerMenuBtn setIsBrgOpen={setIsBrgOpen} isBrgOpen={isBrgOpen} />
						<div className={s.nav_and_auth}>
							<Navigation items={items} />
							<Auth />
						</div>
					</div>
				</div>
			</header>
			<BurgerMenu
				items={items}
				isBrgOpen={isBrgOpen}
				setIsBrgOpen={setIsBrgOpen}
			/>
		</>
	);
};

export default Header;
