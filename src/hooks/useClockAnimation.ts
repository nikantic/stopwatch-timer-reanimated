import { useEffect, useState } from "react";
import {
	useSharedValue,
	withTiming,
	withRepeat,
	Easing,
	useAnimatedProps,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";
import { CLOCK_TYPES } from "../config/types";

const useClockAnimation = ({
	type,
	play,
	reset,
	length,
	duration,
}: {
	type: CLOCK_TYPES;
	play: boolean;
	reset: number;
	length: number;
	duration: number;
}) => {
	const [started, setStarted] = useState(false);
	const animPaused = useSharedValue(true);
	const animStroke = useSharedValue(
		type === CLOCK_TYPES.STOPWATCH ? length : 0
	);
	const animProps = useAnimatedProps(() => {
		return {
			strokeDashoffset: animStroke.value,
		};
	}, [animStroke.value]);

	const startAnimation = () => {
		animStroke.value = withPause(
			withRepeat(
				withTiming(type === CLOCK_TYPES.STOPWATCH ? 0 : length, {
					duration,
					easing: Easing.linear,
				}),
				type === CLOCK_TYPES.STOPWATCH ? -1 : 1
			),
			animPaused
		);
	};

	const resetAnimation = () => {
		animPaused.value = false;
		animStroke.value = withTiming(
			type === CLOCK_TYPES.STOPWATCH ? length : 0.0001,
			{
				duration: type === CLOCK_TYPES.STOPWATCH ? 0 : 500,
			}
		);
	};

	useEffect(() => {
		animPaused.value = !play;
		if (play && !started) {
			startAnimation();
			setStarted(true);
		}
	}, [play]);

	useEffect(() => {
		if (reset > 0) {
			resetAnimation();
			setStarted(false);
		}
	}, [reset]);

	return {
		animProps,
	};
};

export default useClockAnimation;
