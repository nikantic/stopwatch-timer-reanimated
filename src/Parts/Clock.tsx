import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import Counter from "../components/Counter";
import BigClock from "../components/BigClock";
import SmallClock from "../components/SmallClock";
import { CLOCK_TYPES } from "../config/types";
import { timeToMiliseconds } from "../helpers/helpers";

export default function Clock({
	type,
	play,
	reset,
	style,
}: {
	type: CLOCK_TYPES;
	play: boolean;
	reset: boolean;
	style?: ViewStyle;
}) {
	// time gets converted to miliseconds here
	// different colors
	// send local notification on finished
	const enteredTime = {
		minutes: 0,
		seconds: 10,
		miliseconds: 0,
	};
	const timeInMiliseconds = timeToMiliseconds(enteredTime);
	console.log(timeInMiliseconds);
	return (
		<View style={[styles.container, style]}>
			<Counter
				style={styles.counter}
				play={play}
				reset={reset}
				timer={enteredTime}
			/>
			<BigClock
				type={type}
				play={play}
				reset={reset}
				duration={timeInMiliseconds}
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
