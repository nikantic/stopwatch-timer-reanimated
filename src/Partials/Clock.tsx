import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import Counter from "../components/Counter";
import BigClock from "../components/BigClock";
import SmallClock from "../components/SmallClock";
import { CLOCK_TYPES, ITime } from "../config/types";
import { timeToMiliseconds } from "../helpers/helpers";
import inits from "../config/inits";

export default function Clock({
	type,
	style,
	timer,
}: {
	type: CLOCK_TYPES;
	style?: ViewStyle;
	timer?: ITime;
}) {
	return (
		<View style={[styles.container, style]}>
			<Counter style={styles.counter} timer={timer} />
			<View style={styles.container}>
				<BigClock
					type={type}
					duration={
						type === CLOCK_TYPES.STOPWATCH
							? 60000
							: timeToMiliseconds(timer ? timer : inits.timerTime)
					}
				/>
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
