import { useEffect, useState, useRef } from "react";

import { CLOCK_TYPES, initTime, INTERVAL, ITime } from "../config/types";
import { countTime } from "../helpers/helpers";

// check as well if value is valid

const useCounter = ({ timer }: { timer?: ITime }) => {
	const [time, setTime] = useState(timer ? timer : initTime);
	const updateTime = () =>
		setTime((time) =>
			countTime({
				time: { ...time },
				type: timer ? CLOCK_TYPES.TIMER : CLOCK_TYPES.STOPWATCH,
			})
		);

	const timeInterval = useRef(new INTERVAL());
	const controls = {
		start: () => timeInterval.current.startInterval(updateTime),
		stop: () => timeInterval.current.clearInterval(),
		reset: () => setTime(timer ? timer : initTime),
	};

	useEffect(() => {
		return () => controls.stop();
	}, []);

	return {
		time,
		controls,
	};
};

export default useCounter;
