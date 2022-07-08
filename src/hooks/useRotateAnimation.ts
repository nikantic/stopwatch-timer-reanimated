import { useEffect } from "react";
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
		animPaused.value = false;
		animRotation.value = withTiming(0, {
			duration: 0,
		});
	};

	useEffect(() => {
		if (play) {
			initAnimation();
		}
		animPaused.value = !play;
	}, [play]);

	useEffect(() => {
		if (reset > 0) {
			resetAnimation();
		}
	}, [reset]);

	return {
		animStyles,
	};
};

export default useRotateAnimation;
