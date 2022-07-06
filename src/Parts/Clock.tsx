import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import Counter from "../components/Counter";
import BigClock from "../components/BigClock";
import SmallClock from "../components/SmallClock";
import { CLOCK_TYPES } from "../config/types";
import { timeToMiliseconds } from "../helpers/helpers";

export default function Clock({
	type,
	style,
}: {
	type: CLOCK_TYPES;
	style?: ViewStyle;
}) {
	// send local notification on finished and fix android issue on animation end
	// limit clock to the width of device
	// check as well if value is valid
	// different colors
	const enteredTime = {
		hours: 0,
		minutes: 0,
		seconds: 10,
	};
	const timeInMiliseconds = timeToMiliseconds(enteredTime);
	return (
		<View style={[styles.container, style]}>
			<Counter style={styles.counter} timer={enteredTime} />
			<BigClock type={type} duration={timeInMiliseconds} />
			<SmallClock style={styles.smallClock} />
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
