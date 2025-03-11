import { useDispatch, useSelector } from "react-redux";
import s from "./FavoriteTeacherPage.module.css";
import { selectTeachers } from "../../redux/teachers/teachersSelectors.js";
import { useEffect, useState } from "react";
import { selectFavorite } from "../../redux/favorite/favoriteSelectors.js";
import { getTeachers } from "../../redux/teachers/teachersOperations.js";
import TeacherResultItem from "../../components/TeacherResultItem/TeacherResultItem.jsx";

const FavoriteTeachersPage = () => {
	const dispatch = useDispatch();
	const { isLoading, teachers } = useSelector(selectTeachers);
	const [loadTeachersCount, setLoadTeachersCount] = useState(4);

	const favoriteList = useSelector(selectFavorite);

	const favoriteTeacher = teachers?.filter((_, index) =>
		favoriteList.includes(index)
	);

	useEffect(() => {
		dispatch(getTeachers());
	}, [dispatch]);

	const handleLoadMore = () => {
		setLoadTeachersCount((prevCount) => prevCount + 4);
	};

	return (
		<section className="section">
			<div className="container">
				<div className={s.favorite_wraper}>
					{isLoading ? (
						<h3>Loading...</h3>
					) : favoriteTeacher?.length !== 0 ? (
						<ul className={s.favorite_result_list}>
							{favoriteTeacher
								.map((el, index) => (
									<li key={index} className={s.favorite_result_item}>
										<TeacherResultItem id={index} teacher={el} />
									</li>
								))
								.slice(0, loadTeachersCount)}
						</ul>
					) : (
						<p>No teacher was found according to your criteria</p>
					)}

					{favoriteTeacher?.length > loadTeachersCount && !isLoading && (
						<button
							type="button"
							onClick={handleLoadMore}
							className={s.load_btn}
						>
							Load more
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default FavoriteTeachersPage;
