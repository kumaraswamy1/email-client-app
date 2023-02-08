import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filters } from "./Components/Filters/Filters";
import { EmailBody } from "./features/EmailBody/EmailBody";
import { EmailList } from "./features/EmailList/EmailList";

import { fetchEmail } from "./features/EmailList/emailListSlice";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchEmail());
	}, [dispatch]);
	const { status, emails } = useSelector((state) => state.emails);
	const { id } = useSelector((state) => state.emailBody);

	const emailsender = emails.find((email) => email.id === id);
	return (
		<div>
			<Filters />
			<div className={emailsender ? "layout" : undefined}>
				{status === "loading" ? (
					<h1 className="text-white text-xl">Loading....</h1>
				) : (
					<EmailList />
				)}
				{status === "error" && (
					<h1 className="empty-list">error loading list.</h1>
				)}
				<EmailBody />
			</div>
		</div>
	);
}

export default App;
