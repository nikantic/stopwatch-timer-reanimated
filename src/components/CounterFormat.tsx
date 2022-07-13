import React from "react";
import { View, StyleSheet, Text } from "react-native";

import COLORS from "../config/colors";
import { CLOCK_TYPES } from "../config/types";
import { formatTime } from "../helpers/helpers";
import GLOBAL_STYLES from "../styles/global";

export default function CounterFormat({
	time,
	type,
}: {
	time: number;
	type: CLOCK_TYPES;
}) {
	const formattedTime = formatTime({ time });

	return (
		<View style={styles.container}>
			{type === CLOCK_TYPES.TIMER && (
				<>
					<Text style={[styles.number, GLOBAL_STYLES.text]}>{formattedTime.hours}</Text>
					<Text style={[styles.label, GLOBAL_STYLES.text]}>h</Text>
					<Text style={[styles.dot, GLOBAL_STYLES.text]}>:</Text>
				</>
			)}
			<Text style={[styles.number, GLOBAL_STYLES.text]}>{formattedTime.minutes}</Text>
			<Text style={[styles.label, GLOBAL_STYLES.text]}>m</Text>
			<Text style={[styles.dot, GLOBAL_STYLES.text]}>:</Text>
			<Text style={[styles.number, GLOBAL_STYLES.text]}>{formattedTime.seconds}</Text>
			<Text style={[styles.label, GLOBAL_STYLES.text]}>s</Text>
			{type === CLOCK_TYPES.STOPWATCH && (
				<>
					<Text style={[styles.dot, GLOBAL_STYLES.text]}>:</Text>
					<Text style={[styles.number, GLOBAL_STYLES.text]}>{formattedTime.miliseconds}</Text>
					<Text style={[styles.label, GLOBAL_STYLES.text]}>ms</Text>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "baseline",
	},
	number: {
		color: COLORS.WHITE,
		fontSize: 27,
		width: 34,
	},
	dot: {
		color: COLORS.INACTIVE,
		fontSize: 22,
		marginHorizontal: 15,
		alignSelf: "center",
	},
	label: {
		color: COLORS.GRAY,
		fontSize: 20,
	},
});
