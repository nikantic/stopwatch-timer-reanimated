import { useEffect, useState } from "react";
import {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	withRepeat,
	Easing,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";

const useRotateAnimation = ({
	play,
	reset,
}: {
	play: boolean;
	reset: number;
}) => {
	const [started, setStarted] = useState(false);
	const animPaused = useSharedValue(true);
	const animRotation = useSharedValue(0);

	const animStyles = useAnimatedStyle(() => {
		return {
			transform: [
				{
					rotateZ: `${animRotation.value}deg`,
				},
			],
		};
	}, [animRotation.value]);

	const startAnimation = () => {
		animRotation.value = withPause(
			withRepeat(
				withTiming(360, {
					duration: 1000,
					easing: Easing.linear,
				}),
				-1
			),
			animPaused
		);
	};

	const resetAnimation = () => {
		animPaused.value = false;
		animRotation.value = withTiming(0, {
			duration: 0,
		});
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
		animStyles,
	};
};

export default useRotateAnimation;
