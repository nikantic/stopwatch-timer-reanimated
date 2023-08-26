import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import Counter from "../components/Counter";
import BigClock from "../components/BigClock";
import SmallClock from "../components/SmallClock";
import { CLOCK_TYPES } from "../config/types";
import inits from "../config/inits";

export default function Clock({
	style,
	timer,
}: {
	style?: ViewStyle;
	timer?: number;
}) {
	const type = timer ? CLOCK_TYPES.TIMER : CLOCK_TYPES.STOPWATCH;

	return (
		<View style={[styles.container, style]}>
			<Counter style={styles.counter} timer={timer} />
			<View style={styles.container}>
				<BigClock
					type={type}
					duration={
						timer ? timer || inits.timerDuration : inits.stopwatchCircleDuration
					}
				/>
				<View style={styles.smallClock}>
					<SmallClock type={type} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	counter: {
		position: "absolute",
	},
	smallClock: {
		position: "absolute",
		bottom: 50,
	},
});
