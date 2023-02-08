import { useSelector } from "react-redux";
import { ListCard } from "../../Components/ListCard/ListCard";

export const EmailList = () => {
	const { emails, currentFilter, read, favorites } = useSelector(
		(state) => state.emails
	);

	if (currentFilter === "Read") {
		return (
			<div>
				{read.length > 0 ? (
					emails
						.filter((result) => {
							return read.some((data) => data.id === result.id);
						})
						.map((item) => (
							<>
								<ListCard email={item} />
							</>
						))
				) : (
					<h2 className="empty-list"> emails read appear here.</h2>
				)}
			</div>
		);
	}
	if (currentFilter === "Unread") {
		return (
			<div>
				{emails
					.filter((result) => {
						return !read.some((data) => data.id === result.id);
					})
					.map((email) => (
						<>
							<ListCard email={email} />
						</>
					))}
			</div>
		);
	}

	if (currentFilter === "Favorites") {
		return (
			<div>
				{favorites.length > 0 ? (
					favorites.map((email) => (
						<>
							<ListCard email={email} />
						</>
					))
				) : (
					<h2 className="empty-list">No faviortes to show</h2>
				)}
			</div>
		);
	}

	return (
		<div className="mx-auto row md:w-[36rem] w-96">
			{emails.map((email) => (
				<>
					<ListCard email={email} />
				</>
			))}
		</div>
	);
};
