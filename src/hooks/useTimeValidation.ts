import { useEffect, useState } from "react";

import { ITime } from "../config/types";
import { timerZero } from "../helpers/helpers";

export const useTimeValidation = ({ timer }: { timer: ITime }) => {
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
		setValid(!timerZero(time));
	}, [time]);

	return {
		time,
		passTime,
		valid,
	};
};
