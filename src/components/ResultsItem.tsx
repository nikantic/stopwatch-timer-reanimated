import React from "react";
import { View, StyleSheet, Text } from "react-native";

import COLORS from "../config/colors";
import { formatTime } from "../helpers/helpers";
import GLOBAL_STYLES from "../styles/global";

export default function ResultsItem({
	finish,
	time,
	index,
}: {
	finish: number;
	time: number;
	index: number;
}) {
	const formattedFinish = formatTime({ time: finish });
	const formattedTime = formatTime({ time });

	return (
		<View style={styles.container}>
			<Text style={[styles.position, GLOBAL_STYLES.text]}>{index + 1}</Text>
			<View style={styles.time}>
				<Text style={[styles.text, GLOBAL_STYLES.text]}>
					{formattedFinish.minutes}
				</Text>
				<Text style={[styles.dot, GLOBAL_STYLES.text]}>:</Text>
				<Text style={[styles.text, GLOBAL_STYLES.text]}>
					{formattedFinish.seconds}
				</Text>
				<Text style={[styles.dot, GLOBAL_STYLES.text]}>:</Text>
				<Text style={[styles.text, GLOBAL_STYLES.text]}>
					{formattedFinish.miliseconds}
				</Text>
			</View>
			<View style={styles.time}>
				<Text style={[styles.text, GLOBAL_STYLES.text]}>
					{formattedTime.minutes}
				</Text>
				<Text style={[styles.dot, GLOBAL_STYLES.text]}>:</Text>
				<Text style={[styles.text, GLOBAL_STYLES.text]}>
					{formattedTime.seconds}
				</Text>
				<Text style={[styles.dot, GLOBAL_STYLES.text]}>:</Text>
				<Text style={[styles.text, GLOBAL_STYLES.text]}>
					{formattedTime.miliseconds}
				</Text>
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
		fontSize: 18,
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
		fontSize: 18,
	},
	dot: {
		marginHorizontal: 2,
		color: COLORS.GRAY,
		fontSize: 18,
	},
});
