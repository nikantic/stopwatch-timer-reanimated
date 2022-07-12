import { ITimerInput } from "../config/types";

export const formatNumber = (number: number) => {
	return number < 10 ? "0" + number : number;
};

export const timerToMiliseconds = (time: ITimerInput) => {
	return time.hours * 3.6e6 + time.minutes * 60000 + time.seconds * 1000;
};

export const formatTime = ({
	time,
	formatted = true,
}: {
	time: number;
	formatted?: boolean;
}) => {
	const date = new Date(time);
	return formatted
		? {
				hours: formatNumber(date.getUTCHours()),
				minutes: formatNumber(date.getUTCMinutes()),
				seconds: formatNumber(date.getUTCSeconds()),
				miliseconds: formatNumber(date.getUTCMilliseconds())
					.toString()
					.slice(0, 2),
		  }
		: {
				hours: date.getUTCHours(),
				minutes: date.getUTCMinutes(),
				seconds: date.getUTCSeconds(),
				miliseconds: date.getUTCMilliseconds(),
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
