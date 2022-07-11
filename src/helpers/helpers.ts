import { ITimerInput } from "../config/types";

export const formatNumber = (number: number) => {
	return number < 10 ? "0" + number : number;
};

export const timerToMiliseconds = (time: ITimerInput) => {
	return time.hours * 3.6e6 + time.minutes * 60000 + time.seconds * 1000;
}

export const timeToTimerFormat = (time: number) => {
	const date = new Date(time);
	return {
		hours: date.getUTCHours(),
		minutes: date.getUTCMinutes(),
		seconds: date.getUTCSeconds(),
	};
};

export const inputValid = ({
	input,
	max,
}: {
	input: string;
	max?: number;
}): boolean => {
	const number = Number(input);

	if (isNaN(number) || (max && number > max)) {
		return false;
	}

	return true;
};
