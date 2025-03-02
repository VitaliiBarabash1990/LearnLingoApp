// import { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ children, isTrial, closeModal }) => {
	// useEffect(() => {
	// 	if (isTrial) {
	// 		document.documentElement.classList.add("no-scroll");
	// 		document.body.classList.add("no-scroll");
	// 	} else {
	// 		document.documentElement.classList.remove("no-scroll");
	// 		document.body.classList.remove("no-scroll");
	// 	}
	// 	return () => {
	// 		document.documentElement.classList.remove("no-scroll");
	// 		document.body.classList.remove("no-scroll");
	// 	};
	// }, [isTrial]);

	// if (!isTrial) return null;

	return (
		<div id="modal-wrapper" className={s.modal_overlay}>
			<div className={s.modal_content}>
				<button
					className={s.close_btn}
					onClick={() => {
						closeModal();
					}}
				>
					<svg className={s.close_btn_icon}>
						<use href="/sprite.svg#icon-x"></use>
					</svg>
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
