import React from "react";
import { View, StyleSheet, Text } from "react-native";
import COLORS from "../config/colors";
import { ITime } from "../config/types";

import { formatNumber } from "../helpers/helpers";

export default function CounterFormat({ time }: { time: ITime }) {
	const formattedTime = {
		hours: formatNumber(time.hours),
		minutes: formatNumber(time.minutes),
		seconds: formatNumber(time.seconds),
	};

	return (
		<View style={styles.container}>
			<Text style={styles.number}>{formattedTime.hours}</Text>
			<Text style={styles.label}>h</Text>
			<Text style={styles.dot}>:</Text>
			<Text style={styles.number}>{formattedTime.minutes}</Text>
			<Text style={styles.label}>m</Text>
			<Text style={styles.dot}>:</Text>
			<Text style={styles.number}>{formattedTime.seconds}</Text>
			<Text style={styles.label}>s</Text>
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
