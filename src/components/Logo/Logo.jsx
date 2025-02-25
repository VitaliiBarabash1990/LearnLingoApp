import { Link } from "react-router-dom";
import s from "./Logo.module.css";

const Logo = () => {
	return (
		<>
			<Link to="/" className={s.logo_link}>
				<svg className={s.header_logo}>
					<use href="/sprite.svg#icon-logo"></use>
				</svg>
				LearnLingo
			</Link>
		</>
	);
};

export default Logo;
