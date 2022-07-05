import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { IControls, CLOCK_TYPES } from "../config/types";
import ActionBar from "../Parts/ActionBar";
import Clock from "../Parts/Clock";

export default function TimerScreen() {
	const [play, setPlay] = useState(false);
	const [reset, setReset] = useState(false);

	useEffect(() => {
		if (reset && play) {
			setReset(false);
		}
	}, [reset, play]);

	const controls: IControls = {
		play: () => setPlay((play) => !play),
		reset: () => {
			setPlay(false);
			setReset(true);
		},
	};

	return (
		<View style={styles.container}>
			<Clock
				type={CLOCK_TYPES.TIMER}
				style={styles.clock}
				play={play}
				reset={reset}
			/>
			<ActionBar style={styles.actionBar} controls={controls} play={play} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	actionBar: {
		flex: 1,
	},
	clock: {
		flex: 2,
	},
});
