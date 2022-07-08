import { CLOCK_TYPES, ITime } from "../config/types";
import inits from "../config/inits";

export const formatNumber = (number: number) => {
	return number < 10 ? "0" + number : number;
};

export const timeToMiliseconds = (time: ITime) => {
	return time.hours * 3.6e6 + time.minutes * 60000 + time.seconds * 1000;
};

export const timerZero = (time: ITime): boolean => {
	return time.hours === 0 && time.minutes === 0 && time.seconds === 0;
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

export const countTime = ({
	time,
	type,
}: {
	time: ITime;
	type: CLOCK_TYPES;
}) => {
	if (type === CLOCK_TYPES.STOPWATCH) {
		// Seconds
		if (time.seconds > 59) {
			time.seconds = 0;
			time.minutes += 1;
		} else {
			time.seconds += 1;
		}
		// Minutes
		if (time.minutes > 59) {
			time.minutes = 0;
			time.hours += 1;
		}
	} else if (type === CLOCK_TYPES.TIMER) {
		// Reset and init case
		if (timerZero(time)) {
			return inits.zeroTime;
		} else {
			time.seconds -= 1;
		}
		// Seconds
		if (time.seconds < 0) {
			if (time.minutes < 0) {
				time.seconds = 0;
			} else {
				time.seconds = 59;
				time.minutes -= 1;
			}
		}
		// Minutes
		if (time.minutes < 0) {
			if (time.hours < 0) {
				time.minutes = 0;
			} else {
				time.minutes = 59;
				time.hours -= 1;
			}
		}
		// Hours
		if (time.hours < 0) {
			time.hours = 0;
		}
	}
	return time;
};
