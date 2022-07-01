import React from "react";
import Animated from "react-native-reanimated";
import Svg, { Ellipse, Line } from "react-native-svg";

import COLORS from "../config/colors";
import useClockAnimation from "../hooks/useClockAnimation";

export default function SmallClock({
	bgColor = COLORS.DARK,
	size = 50,
	strokeWidth = 3,
	play,
	reset,
}: {
	bgColor?: COLORS;
	size?: number;
	strokeWidth?: number;
	play: boolean;
	reset: boolean;
}) {
	const clockAnimation = useClockAnimation({ play, reset });

	return (
		<Animated.View style={clockAnimation.animStyles}>
			<Svg width={size} height={size}>
				<Ellipse
					strokeWidth={0}
					ry={size / 2}
					rx={size / 2}
					cy={size / 2}
					cx={size / 2}
					stroke={COLORS.BLACK}
					fill={bgColor}
				/>
				<Ellipse
					ry={strokeWidth}
					rx={strokeWidth}
					cy={size / 2}
					cx={size / 2}
					strokeWidth={0}
					stroke={COLORS.BLACK}
					fill={COLORS.WHITE}
				/>
				<Line
					stroke={COLORS.WHITE}
					y2={strokeWidth}
					x2={size / 2}
					y1={size / 2}
					x1={size / 2}
					fill="none"
				/>
			</Svg>
		</Animated.View>
	);
}
