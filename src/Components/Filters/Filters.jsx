import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/EmailList/emailListSlice";

import "./Filters.css";
export const Filters = () => {
	const dispatch = useDispatch();
	const currentFilter = useSelector((state) => state.emails.currentFilter);
	const postHandler = (data) => {
		dispatch(setFilter(data));
	};
	return (
		<div className="navbar">
			<h4>Filter By :</h4>
			<button
				name="Unread"
				className={currentFilter === "Unread" && "filter-btn-active"}
				onClick={(e) => postHandler(e.target.name)}
			>
				Unread
			</button>
			<button
				name="Read"
				className={currentFilter === "Read" && "filter-btn-active"}
				onClick={(e) => postHandler(e.target.name)}
			>
				Read
			</button>
			<button
				name="Favorites"
				className={currentFilter === "Favorites" && "filter-btn-active"}
				onClick={(e) => postHandler(e.target.name)}
			>
				Favorites
			</button>
		</div>
	);
};
