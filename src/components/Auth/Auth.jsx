import { LuLogIn, LuLogOut } from "react-icons/lu";
import s from "./Auth.module.css";
import Modal from "../Modal/Modal.jsx";
import Login from "../Login/Login.jsx";
import Registration from "../Registration/Registration.jsx";
import { useState } from "react";

const Auth = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [isRegister, setIsRegister] = useState(false);
	console.log("isLogin", isLogin);
	console.log("isRegister", isRegister);
	const isAuth = false;
	const login = "Abalduj";

	if (!isAuth) {
		return (
			<>
				<ul className={s.auth_list}>
					<li className={s.auth_item}>
						<button
							type="button"
							className={s.login_button}
							onClick={() => setIsLogin(true)}
						>
							<LuLogIn size={20} color={`var(--yellow)`} className={s.icon} />
							Log in
						</button>
					</li>
					<li className={s.auth_item}>
						<button
							type="button"
							className={s.registration_button}
							onClick={() => setIsRegister(true)}
						>
							Registration
						</button>
					</li>
				</ul>

				{isLogin && (
					<Modal>
						<Login />
					</Modal>
				)}

				{isRegister && (
					<Modal>
						<Registration />
					</Modal>
				)}
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
