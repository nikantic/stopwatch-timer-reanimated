import { useEffect, useState, useRef } from "react";

import { CLOCK_TYPES, INTERVAL, ITime } from "../config/types";
import inits from "../config/inits";
import { countTime } from "../helpers/helpers";

const useCounter = ({ timer }: { timer?: ITime }) => {
	const [time, setTime] = useState(timer ? timer : inits.zeroTime);
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
		reset: () => setTime(timer ? timer : inits.zeroTime),
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
