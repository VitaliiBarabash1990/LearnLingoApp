import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth } from "../../redux/auth/authSelectors.js";

const PrivateRoute = ({ component: Component, redirectTo }) => {
	const { isAuth } = useSelector(selectAuth);
	return isAuth ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
