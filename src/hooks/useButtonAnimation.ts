import {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	interpolateColor,
	withSequence,
	withTiming,
} from "react-native-reanimated";

import COLORS from "../config/colors";
import { COLOR_TYPES } from "../config/types";

const useButtonAnimation = ({
	color,
	maxScale = 1.1,
}: {
	color: COLOR_TYPES;
	maxScale?: number;
}) => {
	const animConfig = {
		scale: {
			from: 1,
			to: maxScale,
		},
		bgColor: {
			from: color,
			to: COLORS.INACTIVE,
		},
	};
	const animScale = useSharedValue(1);
	const animBgColor = useSharedValue(0);
	const animStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: interpolateColor(
				animBgColor.value,
				[0, 1],
				[animConfig.bgColor.from, animConfig.bgColor.to]
			),
			transform: [
				{
					scale: animScale.value,
				},
			],
		};
	});

	const scaleInAndOut = () => {
		animScale.value = withSequence(
			withTiming(animConfig.scale.to, {
				duration: 150,
			}),
			withTiming(animConfig.scale.from, {
				duration: 150,
			})
		);
	};

	const animateBgColor = (pressed: boolean) => {
		animBgColor.value = withSpring(pressed ? 0 : 1);
	};

	return {
		animStyle,
		scaleInAndOut,
		animateBgColor,
	};
};

export default useButtonAnimation;
