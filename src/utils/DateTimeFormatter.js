export const getFormatDate = (dateData) => {
	let localDate = new Date(dateData);
	let years = localDate.getFullYear();
	let month = ("0" + (localDate.getMonth() + 1)).slice(-2);
	let day = ("0" + localDate.getDate()).slice(-2);
	return `${day}/${month}/${years}`;
};

export const getFormatTime = (dateData) => {
	let localDate = new Date(dateData);

	let hours = localDate.getHours();
	let minutes = ("0" + localDate.getMinutes()).slice(-2);
	let ampm = hours >= 12 ? "pm" : "am";
	hours = hours % 12 || 12;
	hours = hours.slice(-2);
	return `${hours}:${minutes} ${ampm}`;
};
