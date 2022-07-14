import React, { useContext, useEffect } from "react";
import { View, ViewStyle } from "react-native";

import useCounter from "../hooks/useCounter";
import AppContext from "../config/context";
import CounterFormat from "./CounterFormat";
import { CLOCK_TYPES } from "../config/types";

export default function Counter({
	style,
	timer,
}: {
	style?: ViewStyle;
	timer?: number;
}) {
	const { play, reset, elapsed, controls } = useContext(AppContext);
	const counter = useCounter({ timer });

	if (elapsed) {
		elapsed.current = counter.value;
	}

	if (timer && play && counter.value === 0) {
		setTimeout(() => {
			controls.reset();
		});
	}

	useEffect(() => {
		play ? counter.controls.play(true) : counter.controls.play(false);
	}, [play]);

	useEffect(() => {
		if (reset > 0) {
			counter.controls.reset();
		}
	}, [reset]);

	return (
		<View style={style}>
			<CounterFormat
				type={timer ? CLOCK_TYPES.TIMER : CLOCK_TYPES.STOPWATCH}
				time={counter.value}
			/>
		</View>
	);
}
