import { useEffect, useState } from "react";

import { initTime, INTERVAL } from "../config/types";
import { calcTime } from "../helpers/helpers";

const useCounter = () => {
	const [time, setTime] = useState(initTime);
	const timeInterval = new INTERVAL();
	const updateTime = () => setTime((time) => calcTime({ ...time }));

	const start = () => timeInterval.startInterval(updateTime);
	const stop = () => timeInterval.clearInterval();

	useEffect(() => {
		return () => timeInterval.clearInterval();
	}, []);

	return {
		time,
		start,
		stop,
	};
};

export default useCounter;
