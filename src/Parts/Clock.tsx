import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import Counter from "../components/Counter";
import BigClock from "../components/BigClock";
import SmallClock from "../components/SmallClock";
import { CLOCK_TYPES } from "../config/types";

export default function Clock({
	play,
	reset,
	style,
}: {
	play: boolean;
	reset: boolean;
	style?: ViewStyle;
}) {
	return (
		<View style={[styles.container, style]}>
			<Counter style={styles.counter} play={play} reset={reset} />
			<BigClock
				type={CLOCK_TYPES.STOPWATCH}
				play={play}
				reset={reset}
				duration={5000}
			/>
			<SmallClock style={styles.smallClock} play={play} reset={reset} />
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
		height: 200,
		justifyContent: "flex-end",
	},
});
