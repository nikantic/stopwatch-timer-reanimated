import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Counter from "../components/Counter";

import SmallClock from "../components/SmallClock";
import COLORS from "../config/colors";
import { IControls } from "../config/types";
import ActionBar from "../Parts/ActionBar";

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
			<ActionBar controls={controls} play={play} />
			<Counter play={play} reset={reset} />
			<SmallClock play={play} reset={reset} />
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
});
