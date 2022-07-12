import { useEffect, useState } from "react";
import {
	useSharedValue,
	withTiming,
	withRepeat,
	Easing,
	useAnimatedProps,
	interpolateColor,
	withSequence,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";
import COLORS from "../config/colors";
import { CLOCK_TYPES, COLOR_TYPES } from "../config/types";

const useClockAnimation = ({
	type,
	play,
	reset,
	color = COLORS.MAIN,
	length,
	duration,
}: {
	type: CLOCK_TYPES;
	play: boolean;
	reset: number;
	color: COLOR_TYPES;
	length: number;
	duration: number;
}) => {
	const [started, setStarted] = useState(false);
	const animPaused = useSharedValue(true);
	const animColor = useSharedValue(0);
	const animStroke = useSharedValue(
		type === CLOCK_TYPES.STOPWATCH ? length : 0
	);
	const animProps = useAnimatedProps(() => {
		return {
			strokeDashoffset: animStroke.value,
			stroke: interpolateColor(animColor.value, [0, 1], [color, COLORS.WHITE]),
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

	const colorAnimation = () => {
		animColor.value = withSequence(
			withTiming(1, {
				duration: 100,
			}),
			withTiming(0, {
				duration: 200,
			})
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
		colorAnimation,
	};
};

export default useClockAnimation;
