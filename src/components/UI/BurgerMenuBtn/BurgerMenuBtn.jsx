import { HiMenu } from "react-icons/hi";
import s from "./BurgerMenuBtn.module.css";
import { MdClose } from "react-icons/md";

const BurgerMenuBtn = ({ setIsBrgOpen, isBrgOpen }) => {
	return (
		<div
			className={s.burger_menu_btn}
			onClick={() => {
				setIsBrgOpen(!isBrgOpen);
			}}
		>
			{!isBrgOpen && <HiMenu size={28} color={`var(--accent-color)`} />}
			{isBrgOpen && <MdClose size={28} color={`var(--accent-color)`} />}
		</div>
	);
};

export default BurgerMenuBtn;
