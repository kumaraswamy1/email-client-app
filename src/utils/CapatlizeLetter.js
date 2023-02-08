export const profileLetter = (words) => {
	return words.split(" ").map((w) => w.substring(0, 1).toUpperCase());
};
export const captializeWord = (name) => {
	return name
		.split(" ")
		.map((l) => l.substring(0, 1).toUpperCase() + l.substring(1))
		.join(" ");
};
