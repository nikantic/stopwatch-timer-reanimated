import React from "react";
import { StyleSheet, StyleSheetProperties, View } from "react-native";
import Animated from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

import COLORS from "../config/colors";
import { CLOCK_TYPES } from "../config/types";
import useCircle from "../hooks/useCircle";
import useClockAnimation from "../hooks/useClockAnimation";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function BigClock({
	type,
	duration,
	size = 280,
	color = COLORS.MAIN,
	play,
	reset,
}: {
	type: CLOCK_TYPES;
	duration: number;
	size?: number;
	color?: COLORS;
	play: boolean;
	reset: boolean;
}) {
	const circleConfig = useCircle({ size });
	const clockAnimation = useClockAnimation({
		type,
		play,
		reset,
		duration,
		length: circleConfig.length,
	});

	return (
		<View>
			<Svg width={size} height={size} style={styles.svg}>
				<AnimatedCircle
					animatedProps={clockAnimation.animProps}
					cx={size / 2}
					cy={size / 2}
					r={circleConfig.radius}
					stroke={color}
					fill="none"
					strokeWidth={10}
					strokeLinecap="round"
					strokeDasharray={circleConfig.length}
				/>
			</Svg>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	svg: {
		transform: [
			{
				rotateZ: "270deg",
			},
		],
	},
});
