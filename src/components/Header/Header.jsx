// import { useState } from "react";
import Auth from "../Auth/Auth.jsx";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import s from "./Header.module.css";
// import BurgerMenuBtn from "../UI/BurgerMenuBtn/BurgerMenuBtn.jsx";
// import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const Header = () => {
	const isAuth = true;
	// const [isBrgOpen, setIsBrgOpen] = useState(false);

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
						<div className={s.nav_and_auth}>
							<Navigation items={items} />
							<Auth />
							{/* <BurgerMenuBtn
								setIsBrgOpen={setIsBrgOpen}
								isBrgOpen={isBrgOpen}
							/> */}
						</div>
					</div>
				</div>
			</header>
			{/* <BurgerMenu
				items={items}
				isBrgOpen={isBrgOpen}
				setIsBrgOpen={setIsBrgOpen}
			/> */}
		</>
	);
};

export default Header;
