import { getFormatDate, getFormatTime } from "../../utils/DateTimeFormatter";

export const DateTime = ({ date }) => {
	return <div>{`${getFormatDate(date)} ${getFormatTime(date)}`}</div>;
};
