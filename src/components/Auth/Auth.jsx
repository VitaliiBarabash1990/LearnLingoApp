import { LuLogIn, LuLogOut } from "react-icons/lu";
import s from "./Auth.module.css";
import Modal from "../Modal/Modal.jsx";
// import Login from "../Login/Login.jsx";
import Registration from "../Registration/Registration.jsx";

const Auth = () => {
	const isAuth = false;
	const login = "Abalduj";

	if (!isAuth) {
		return (
			<>
				<ul className={s.auth_list}>
					<li className={s.auth_item}>
						<button type="button" className={s.login_button}>
							<LuLogIn size={20} color={`var(--yellow)`} className={s.icon} />
							Log in
						</button>
					</li>
					<li className={s.auth_item}>
						<button type="button" className={s.registration_button}>
							Registration
						</button>
					</li>
				</ul>
				<Modal>
					{/* <Login /> */}
					<Registration />
				</Modal>
			</>
		);
	}

	return (
		<div className={s.header_logout}>
			<p className={`title ${s.header_logout_text}`}>Hello, {login}!</p>
			<button type="button" className={`${s.login_button} ${s.logout}`}>
				<LuLogOut size={20} color={`var(--yellow)`} />
				LogOut
			</button>
		</div>
	);
};

export default Auth;
