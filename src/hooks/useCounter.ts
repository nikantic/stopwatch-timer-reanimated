import { useEffect, useState } from "react";

import inits from "../config/inits";
import {
	cancelAnimation,
	Easing,
	runOnJS,
	useDerivedValue,
	useSharedValue,
	withRepeat,
	withTiming,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";

const useCounter = ({ timer }: { timer?: number }) => {
	const duration = timer ? timer : inits.stopwatchDuration;

	const [value, setValue] = useState(timer ? duration : 0);
	const [started, setStarted] = useState(false);

	const animCounter = useSharedValue(timer ? duration : 0);
	const animPaused = useSharedValue(true);

	const updateValue = (val: number) => setValue(val);

	useDerivedValue(() => {
		runOnJS(updateValue)(animCounter.value);
	});

	const startAnimation = () => {
		animCounter.value = withPause(
			withRepeat(
				withTiming(timer ? 0 : duration, {
					duration,
					easing: Easing.linear,
				}),
				timer ? 1 : -1
			),
			animPaused
		);
	};

	const controls = {
		play: (play: boolean) => {
			animPaused.value = !play;
			if (play && !started) {
				startAnimation();
				setStarted(true);
			}
		},
		reset: () => {
			cancelAnimation(animCounter);
			setStarted(false);
			animCounter.value = timer ? duration : 0;
		},
	};

	useEffect(() => {
		return () => cancelAnimation(animCounter);
	}, []);

	return {
		value,
		controls,
	};
};

export default useCounter;
