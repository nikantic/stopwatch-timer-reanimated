import { useState } from "react";
import {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	interpolateColor,
} from "react-native-reanimated";

import COLORS from "../config/colors";

const useButtonAnimation = ({
	color,
	maxScale = 1.3,
}: {
	color: COLORS;
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

	const scaleIn = () => {
		animScale.value = withSpring(animConfig.scale.to, {
			stiffness: 300,
		});
	};

	const scaleOut = () => {
		animScale.value = withSpring(animConfig.scale.from, {
			stiffness: 200,
		});
	};

	const animateBgColor = (pressed: boolean) => {
		animBgColor.value = withSpring(pressed ? 0 : 1, {
			restSpeedThreshold: 200,
		});
	};

	return {
		animStyle,
		scaleIn,
		scaleOut,
		animateBgColor,
	};
};

export default useButtonAnimation;
