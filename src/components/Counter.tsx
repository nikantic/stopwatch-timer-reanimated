import React, { useContext, useEffect } from "react";
import { View, ViewStyle, Alert } from "react-native";

import useCounter from "../hooks/useCounter";
import { timerZero } from "../helpers/helpers";
import { ITime } from "../config/types";
import AppContext from "../config/context";
import CounterFormat from "./CounterFormat";

export default function Counter({
	style,
	timer,
}: {
	style?: ViewStyle;
	timer?: ITime;
}) {
	const { play, reset, controls } = useContext(AppContext);
	const counter = useCounter({ timer });

	if (play && timer && timerZero(counter.time)) {
		setTimeout(() => {
			controls.reset();
			Alert.alert("Finished", "Time has finished running");
		});
	}

	useEffect(() => {
		play ? counter.controls.start() : counter.controls.stop();
	}, [play]);

	useEffect(() => {
		if (reset > 0) {
			counter.controls.reset();
		}
	}, [reset]);

	return (
		<View style={style}>
			<CounterFormat time={counter.time} />
		</View>
	);
}
