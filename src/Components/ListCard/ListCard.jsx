import { useDispatch, useSelector } from "react-redux";
import "./EmailList.css";
import { setRead } from "../../features/EmailList/emailListSlice";
import { captializeWord, profileLetter } from "../../utils/CapatlizeLetter";
import { DateTime } from "../DateTime/DateTime";
import { fetchEmailBody } from "../../features/EmailBody/EmailBodySlice";

export const ListCard = ({ email }) => {
	const { emails, read } = useSelector((state) => state.emails);
	const { id } = useSelector((state) => state.emailBody);
	const dispatch = useDispatch();
	const emailHandler = (emailData) => {
		dispatch(fetchEmailBody(emailData.id));
		dispatch(setRead(emailData));
	};
	const readEmails = read.some((data) => data.id === email.id);

	const emailsender = emails.find((email) => email.id === id);
	return (
		<div onClick={() => emailHandler(email)}>
			<div className={`list-card ${readEmails && "read-background"} `}>
				<div className="list-card-content">
					<div>
						<h4 className="avatar">{profileLetter(email.from.name)}</h4>
					</div>
					<div>
						<div className="list-card-data">
							<h2 className="from-field">
								From:
								<span className="from-value">
									{`  ${captializeWord(email.from.name)}   ${email.from.email}`}
								</span>
							</h2>
							<h2 className="from-field">
								Subject:<span className="from-value"> {email.subject}</span>
							</h2>

							<div
								className={`${emailsender && "email-data-grid"} email-data
								 `}
							>
								<h3 className="email-data">{email.short_description}</h3>
								<DateTime date={email.date} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
