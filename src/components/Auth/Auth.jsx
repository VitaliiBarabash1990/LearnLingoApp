import { LuLogIn, LuLogOut } from "react-icons/lu";
import s from "./Auth.module.css";
import Modal from "../Modal/Modal.jsx";
import Login from "../Login/Login.jsx";
import Registration from "../Registration/Registration.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/authSelectors.js";
import { LogOut } from "../../redux/auth/authOperations.js";

const Auth = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [isRegister, setIsRegister] = useState(false);
	const dispatch = useDispatch();
	const { isAuth, login } = useSelector(selectAuth);
	const data = useSelector(selectAuth);
	console.log("Data", data);

	const closeModal = () => {
		setIsLogin(false);
		setIsRegister(false);
	};
	const handleLogOut = () => {
		dispatch(LogOut());
	};

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
					<Modal closeModal={closeModal}>
						<Login closeModal={closeModal} />
					</Modal>
				)}

				{isRegister && (
					<Modal closeModal={closeModal}>
						<Registration closeModal={closeModal} />
					</Modal>
				)}
			</>
		);
	}

	return (
		<div className={s.header_logout}>
			<p className={`title ${s.header_logout_text}`}>Hello, {login}!</p>
			<button
				type="button"
				className={`${s.login_button} ${s.logout}`}
				onClick={handleLogOut}
			>
				<LuLogOut size={20} color={`var(--yellow)`} />
				LogOut
			</button>
		</div>
	);
};

export default Auth;
