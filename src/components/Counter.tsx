import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, ViewStyle, Alert } from "react-native";

import COLORS from "../config/colors";
import useCounter from "../hooks/useCounter";
import { timerFinished, formatNumber } from "../helpers/helpers";
import { ITime } from "../config/types";
import AppContext from "../config/context";

export default function Counter({
	style,
	timer,
}: {
	style?: ViewStyle;
	timer?: ITime;
}) {
	const { play, reset, controls } = useContext(AppContext);
	const counter = useCounter({ timer });
	const formattedTime = `${formatNumber(counter.time.hours)}h : ${formatNumber(
		counter.time.minutes
	)}m : ${formatNumber(counter.time.seconds)}s`;

	if (play && timer && timerFinished(counter.time)) {
		setTimeout(() => {
			controls.reset();
			Alert.alert("Finished", "Time has finished running");
		});
	}

	useEffect(() => {
		play ? counter.controls.start() : counter.controls.stop();
	}, [play]);

	useEffect(() => {
		if (reset) {
			counter.controls.reset();
		}
	}, [reset]);

	return (
		<View style={style}>
			<Text style={styles.text}>{formattedTime}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: COLORS.WHITE,
		fontSize: 27,
		fontFamily: "monospace",
	},
});
