import { useDispatch, useSelector } from "react-redux";
import { addFavorites, removeFavorites } from "../EmailList/emailListSlice";

import "./Emailbody.css";
import { DateTime } from "../../Components/DateTime/DateTime";
import { captializeWord, profileLetter } from "../../utils/CapatlizeLetter";

export const EmailBody = () => {
	const dispatch = useDispatch();
	const { emails, favorites } = useSelector((state) => state.emails);
	const { status, id, body } = useSelector((state) => state.emailBody);
	const emailsender = emails.find((email) => email.id === id);

	const isFavorite = favorites.some((item) => item.id === emailsender.id);

	const postHandler = () => {
		isFavorite
			? dispatch(removeFavorites(emailsender))
			: dispatch(addFavorites(emailsender));
	};

	if (status === "laoding") {
		return <h2>loading</h2>;
	}
	if (status === "error") {
		return <h2>cannot load body</h2>;
	}

	return (
		emailsender && (
			<div className="slave">
				<div className="body-header">
					<div>
						<h4 className=" avatar">{profileLetter(emailsender.from.name)}</h4>
					</div>
					<div className="body-header-details">
						<div className="body-header-content">
							<h1 className="from-value">
								{captializeWord(emailsender.from.name)}
							</h1>

							<button
								className="fav-btn"
								onClick={() => postHandler(emailsender)}
							>
								{isFavorite ? "Remove from faviortes" : "Mark as favorite"}
							</button>
						</div>
						<DateTime date={emailsender.date} />
						<div className="email-body">
							<div dangerouslySetInnerHTML={{ __html: body }}></div>
						</div>
					</div>
				</div>
			</div>
		)
	);
};
