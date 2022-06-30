import { useEffect } from "react";
import {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	withRepeat,
	Easing,
	cancelAnimation,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";

const useClockAnimation = ({ paused }: { paused: boolean }) => {
	const animPaused = useSharedValue(false);
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

	useEffect(() => {
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

		return () => cancelAnimation(animRotation);
	}, []);

	useEffect(() => {
		animPaused.value = paused;
	}, [paused]);

	return {
		animStyles,
	};
};

export default useClockAnimation;
