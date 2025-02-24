import { HiMenu } from "react-icons/hi";

const BurgerMenuBtn = ({ setIsBrgOpen, isBrgOpen }) => {
	return (
		<div
			className="burgerMenuBtn"
			onClick={() => {
				setIsBrgOpen(!isBrgOpen);
			}}
		>
			<HiMenu size={28} color={`var(--accent-color)`} />
		</div>
	);
};

export default BurgerMenuBtn;
