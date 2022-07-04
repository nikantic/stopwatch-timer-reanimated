import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Counter from "../components/Counter";

import { IControls } from "../config/types";
import ActionBar from "../Parts/ActionBar";
import Clock from "../Parts/Clock";

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

	return (
		<View style={styles.container}>
			<Clock style={styles.clock} play={play} reset={reset} />
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
