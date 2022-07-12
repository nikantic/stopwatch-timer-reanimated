import React from "react";
import { View, StyleSheet, Text } from "react-native";

import COLORS from "../config/colors";
import { formatTime } from "../helpers/helpers";

export default function ResultsItem({
	time,
	index,
}: {
	time: number;
	index: number;
}) {
	const formattedTime = formatTime({ time });

	return (
		<View style={styles.container}>
			<Text style={styles.position}>{index + 1}</Text>
			<View style={styles.time}>
				<Text style={styles.text}>{formattedTime.minutes}</Text>
				<Text style={styles.label}>:</Text>
				<Text style={styles.text}>{formattedTime.seconds}</Text>
				<Text style={styles.label}>:</Text>
				<Text style={styles.text}>{formattedTime.miliseconds}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	position: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		textTransform: "uppercase",
		backgroundColor: COLORS.DARK,
		borderWidth: 1,
		borderColor: COLORS.INACTIVE,
		color: COLORS.WHITE,
		fontSize: 20,
		padding: 7,
		textAlign: "center",
		width: 50,
	},
	time: {
		flex: 2,
		flexDirection: "row",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: COLORS.INACTIVE,
		padding: 7,
		textAlign: "center",
	},
	text: {
		color: COLORS.WHITE,
		fontSize: 20,
	},
	label: {
		marginHorizontal: 2,
		color: COLORS.GRAY,
		fontSize: 20,
	},
});
