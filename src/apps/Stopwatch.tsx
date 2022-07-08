import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { IControls, CLOCK_TYPES } from "../config/types";
import ActionBar from "../Partials/ActionBar";
import Clock from "../Partials/Clock";
import AppContext from "../config/context";

export default function Stopwatch() {
	const [play, setPlay] = useState(false);
	const [reset, setReset] = useState(0);
	const handleReset = () => setReset((reset) => reset + 1);

	const controls: IControls = {
		play: () => setPlay((play) => !play),
		new: () => handleReset(),
		reset: () => {
			setPlay(false);
			handleReset();
		},
	};

	return (
		<AppContext.Provider value={{ play, reset, controls }}>
			<View style={styles.container}>
				<Clock type={CLOCK_TYPES.STOPWATCH} style={styles.clock} />
				<ActionBar style={styles.actionBar} />
			</View>
		</AppContext.Provider>
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
