import s from "./Modal.module.css";

const Modal = ({ children }) => {
	return (
		<div id="modal-wrapper" className={s.modal_overlay}>
			<div className={s.modal_content}>
				<button className={s.close_btn}>
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
