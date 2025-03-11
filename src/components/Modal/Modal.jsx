import { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ children, isLock, closeModal }) => {
	// Закриття по клавіші Esc
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				closeModal();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [closeModal]);

	// Закриття по кліку на backdrop
	const handleBackdropClick = (event) => {
		if (event.target.id === "modal-wrapper") {
			closeModal();
		}
	};

	useEffect(() => {
		if (isLock) {
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
	}, [isLock]);

	if (!isLock) return null;

	return (
		<div
			id="modal-wrapper"
			className={s.modal_overlay}
			onClick={handleBackdropClick}
		>
			<div className={s.modal_content}>
				<button className={s.close_btn} onClick={closeModal}>
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
