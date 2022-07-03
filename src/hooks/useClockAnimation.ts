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

const useClockAnimation = ({
	play,
	reset,
}: {
	play: boolean;
	reset: boolean;
}) => {
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

	const initAnimation = () => {
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
		animPaused.value = !play;
		animRotation.value = withTiming(
			0,
			{
				duration: 0,
			},
			initAnimation
		);
	};

	useEffect(() => {
		initAnimation();
		return () => cancelAnimation(animRotation);
	}, []);

	useEffect(() => {
		animPaused.value = !play;
	}, [play]);

	useEffect(() => {
		if (reset) {
			resetAnimation();
		}
	}, [reset]);

	return {
		animStyles,
	};
};

export default useClockAnimation;
