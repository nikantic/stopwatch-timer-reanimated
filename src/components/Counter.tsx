import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import COLORS from "../config/colors";
import useCounter from "../hooks/useCounter";
import { formatNumber } from "../helpers/helpers";

export default function Counter({
	play,
	reset,
}: {
	play: boolean;
	reset: boolean;
}) {
	const counter = useCounter();
	const formattedTime = `${formatNumber(counter.time.minutes)} : ${formatNumber(
		counter.time.seconds
	)} : ${formatNumber(counter.time.miliseconds)}`;

	useEffect(() => {
		play ? counter.controls.start() : counter.controls.stop();
	}, [play]);

	useEffect(() => {
		if (reset) {
			counter.controls.reset();
		}
	}, [reset]);

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
