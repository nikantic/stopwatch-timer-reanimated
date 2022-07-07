import React, { useMemo, useState } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import Counter from "../components/Counter";
import BigClock from "../components/BigClock";
import SmallClock from "../components/SmallClock";
import { CLOCK_TYPES, BUTTON_TYPES, ICONS } from "../config/types";
import { timeToMiliseconds } from "../helpers/helpers";
import Button from "../components/Button";
import COLORS from "../config/colors";

export default function Clock({
	type,
	style,
}: {
	type: CLOCK_TYPES;
	style?: ViewStyle;
}) {
	// check if value is valid
	// if type TIMER render modal
	const [inputTime, setInputTime] = useState({
		hours: 0,
		minutes: 0,
		seconds: 10,
	});
	const miliseconds = useMemo(() => timeToMiliseconds(inputTime), [inputTime]);
	return (
		<View style={[styles.container, style]}>
			<Counter style={styles.counter} timer={inputTime} />
			<View style={styles.container}>
				<BigClock type={type} duration={miliseconds} />
				<View style={styles.smallClock}>
					<SmallClock />
				</View>
			</View>
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
		bottom: 50,
	},
});
