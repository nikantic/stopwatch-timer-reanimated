import React from "react";
import { View, StyleSheet, Text } from "react-native";

import COLORS from "../config/colors";
import { CLOCK_TYPES } from "../config/types";
import { formatNumber } from "../helpers/helpers";

export default function CounterFormat({
	time,
	type,
}: {
	time: number;
	type: CLOCK_TYPES;
}) {
	const date = new Date(time);
	const formattedTime = {
		hours: formatNumber(date.getUTCHours()),
		minutes: formatNumber(date.getUTCMinutes()),
		seconds: formatNumber(date.getUTCSeconds()),
		miliseconds: formatNumber(date.getUTCMilliseconds()).toString().slice(0, 2),
	};

	return (
		<View style={styles.container}>
			{type === CLOCK_TYPES.TIMER && (
				<>
					<Text style={styles.number}>{formattedTime.hours}</Text>
					<Text style={styles.label}>h</Text>
					<Text style={styles.dot}>:</Text>
				</>
			)}
			<Text style={styles.number}>{formattedTime.minutes}</Text>
			<Text style={styles.label}>m</Text>
			<Text style={styles.dot}>:</Text>
			<Text style={styles.number}>{formattedTime.seconds}</Text>
			<Text style={styles.label}>s</Text>
			{type === CLOCK_TYPES.STOPWATCH && (
				<>
					<Text style={styles.dot}>:</Text>
					<Text style={styles.number}>{formattedTime.miliseconds}</Text>
					<Text style={styles.label}>ms</Text>
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
		fontFamily: "monospace",
	},
	dot: {
		color: COLORS.INACTIVE,
		fontSize: 22,
		fontFamily: "monospace",
		marginHorizontal: 15,
		alignSelf: "center",
	},
	label: {
		color: COLORS.GRAY,
		fontSize: 20,
		fontFamily: "monospace",
	},
});
