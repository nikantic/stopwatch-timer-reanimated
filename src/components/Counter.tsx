import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import COLORS from "../config/colors";
import useCounter from "../hooks/useCounter";
import { formatNumber } from "../helpers/helpers";

export default function Counter({ play }: { play: boolean }) {
	const counter = useCounter();

	const formattedTime = `${formatNumber(counter.time.minutes)} : ${formatNumber(
		counter.time.seconds
	)} : ${formatNumber(counter.time.miliseconds)}`;

	useEffect(() => {
		play ? counter.start() : counter.stop();
	}, [play]);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{formattedTime}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	text: {
		color: COLORS.WHITE,
		fontSize: 30,
		fontFamily: "monospace",
	},
});
