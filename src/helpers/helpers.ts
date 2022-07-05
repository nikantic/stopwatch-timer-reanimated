import { CLOCK_TYPES, ITime } from "../config/types";

export const formatNumber = (number: number) => {
	return number < 10 ? "0" + number : number;
};

export const timeToMiliseconds = (time: ITime) => {
	return time.minutes * 60000 + time.seconds * 1000 + time.miliseconds;
};

// check this function logic again
export const countTime = ({
	time,
	type,
}: {
	time: ITime;
	type: CLOCK_TYPES;
}) => {
	if (type === CLOCK_TYPES.STOPWATCH) {
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
	} else if (type === CLOCK_TYPES.TIMER) {
		// countdown logic
	}
	return time;
};
