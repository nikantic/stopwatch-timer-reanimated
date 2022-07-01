import { ITime } from "../config/types";

export const formatNumber = (number: number) => {
	return number < 10 ? "0" + number : number;
};

export const timeToMiliseconds = (time: ITime) => {
	return time.minutes * 3600 + time.seconds * 60 + time.miliseconds;
};

export const calcTime = (time: ITime) => {
	if (time.miliseconds > 59) {
		time.miliseconds = 0;
		time.seconds += 1;
	} else {
		time.miliseconds += 1;
	}
	if (time.seconds > 59) {
		time.seconds = 0;
		time.minutes += 1;
	}
	if (time.minutes > 59) {
		time.minutes = 0;
	}
	return time;
};
