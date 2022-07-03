import React from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

import COLORS from "../config/colors";
import { CLOCK_TYPES } from "../config/types";
import useCircle from "../hooks/useCircle";

export default function BigClock({
	type,
	progress,
	progressMax,
	size = 300,
	color = COLORS.MAIN,
}: {
	type: CLOCK_TYPES;
	progress: number;
	progressMax: number;
	size?: number;
	color?: COLORS;
}) {
	// Timer support as well
	// use animatedStyles?
	const circleConfig = useCircle({ size });
	const progressUnit = circleConfig.length / progressMax;
	const progressLength =
		type === CLOCK_TYPES.STOPWATCH
			? circleConfig.length - progressUnit * progress
			: progressUnit * progress;
	console.log(progress);

	return (
		<View>
			<Svg width={size} height={size} style={styles.svg}>
				<Circle
					cx={size / 2}
					cy={size / 2}
					r={circleConfig.radius}
					stroke={color}
					fill="none"
					strokeWidth={10}
					strokeLinecap="round"
					strokeDasharray={circleConfig.length}
					strokeDashoffset={progressLength}
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
