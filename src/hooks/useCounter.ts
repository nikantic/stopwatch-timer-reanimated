import { useEffect, useState, useRef } from "react";

import { initTime, INTERVAL } from "../config/types";
import { calcTime } from "../helpers/helpers";

const useCounter = () => {
	const [time, setTime] = useState(initTime);
	const updateTime = () => setTime((time) => calcTime({ ...time }));

	const timeInterval = useRef(new INTERVAL());
	const controls = {
		start: () => timeInterval.current.startInterval(updateTime),
		stop: () => timeInterval.current.clearInterval(),
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
