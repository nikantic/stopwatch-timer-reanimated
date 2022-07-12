import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

import COLORS from "../config/colors";
import AppContext from "../config/context";
import { CLOCK_TYPES, COLOR_TYPES } from "../config/types";
import useCircle from "../hooks/useCircle";
import useClockAnimation from "../hooks/useClockAnimation";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function BigClock({
	type,
	duration,
	size = 300,
	color = COLORS.MAIN,
}: {
	type: CLOCK_TYPES;
	duration: number;
	size?: number;
	color?: COLOR_TYPES;
}) {
	const { play, reset, saved } = useContext(AppContext);
	const circleConfig = useCircle({ size });
	const clockAnimation = useClockAnimation({
		type,
		play,
		reset,
		color,
		duration,
		length: circleConfig.length,
	});

	useEffect(clockAnimation.colorAnimation, [saved]);

	return (
		<View>
			<Svg width={size} height={size} style={styles.svg}>
				<Circle
					cx={size / 2}
					cy={size / 2}
					r={circleConfig.radius}
					stroke={COLORS.GRAY}
					fill="none"
					strokeWidth={0.5}
					strokeLinecap="round"
					strokeDasharray={6}
				/>
				<AnimatedCircle
					animatedProps={clockAnimation.animProps}
					cx={size / 2}
					cy={size / 2}
					r={circleConfig.radius}
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
