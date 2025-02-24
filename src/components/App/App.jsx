import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Layout/Layout.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import TeacherPages from "../../pages/TeacherPages/TeacherPages.jsx";
import FavoriteTeachersPage from "../../pages/FavoriteTeachersPage/FavoriteTeachersPage.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/teachers" element={<TeacherPages />} />
					<Route
						path="favorites"
						element={
							<PrivateRoute
								component={<FavoriteTeachersPage />}
								redirectTo="/teachers"
							/>
						}
					/>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<ToastContainer autoClose={2500} />
		</>
	);
}

export default App;
