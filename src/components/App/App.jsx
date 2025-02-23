import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "../Layout/Layout.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import ContactsPage from "../../pages/ContactsPage/ContactsPage.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route
						path="favorites"
						element={
							<PrivateRoute component={<ContactsPage />} redirectTo="/login" />
						}
					/>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
