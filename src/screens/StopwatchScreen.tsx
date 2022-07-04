import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Counter from "../components/Counter";

import SmallClock from "../components/SmallClock";
import COLORS from "../config/colors";
import { IControls, CLOCK_TYPES } from "../config/types";
import ActionBar from "../Parts/ActionBar";
import BigClock from "../components/BigClock";

export default function StopwatchScreen() {
	const [play, setPlay] = useState(false);
	const [reset, setReset] = useState(false);

	useEffect(() => {
		if (reset && play) {
			setReset(false);
		}
	}, [reset, play]);

	const controls: IControls = {
		play: () => setPlay((play) => !play),
		new: () => setReset(true),
		reset: () => {
			setPlay(false);
			setReset(true);
		},
	};

	// add new group

	return (
		<View style={styles.container}>
			<View style={styles.clock}>
				<Counter style={styles.counter} play={play} reset={reset} />
				<BigClock
					type={CLOCK_TYPES.TIMER}
					play={play}
					reset={reset}
					duration={5000}
				/>
				<SmallClock play={play} reset={reset} />
			</View>
			<ActionBar style={styles.actionBar} controls={controls} play={play} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BLACK,
		alignItems: "center",
		justifyContent: "center",
	},
	actionBar: {
		flex: 1,
	},
	clock: {
		flex: 2,
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
	},
	counter: {
		position: "absolute",
	},
});
