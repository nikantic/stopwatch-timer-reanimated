import { useEffect, useState } from "react";

import { ITimerInput } from "../config/types";

export const useTimerValidation = ({ timer }: { timer: ITimerInput }) => {
	const [time, setTime] = useState(timer);
	const [valid, setValid] = useState(true);

	const passTime = {
		hours: (hours: number) => {
			setTime({ ...time, hours });
		},
		minutes: (minutes: number) => {
			setTime({ ...time, minutes });
		},
		seconds: (seconds: number) => {
			setTime({ ...time, seconds });
		},
	};

	useEffect(() => {
		const timeZero =
			time.hours === 0 && time.minutes === 0 && time.seconds === 0;
		setValid(!timeZero);
	}, [time]);

	return {
		time,
		passTime,
		valid,
	};
};
