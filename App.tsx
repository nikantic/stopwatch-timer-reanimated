import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Counter from "./src/components/Counter";

import SmallClock from "./src/components/SmallClock";
import COLORS from "./src/config/colors";
import ActionBar from "./src/Parts/ActionBar";

export default function App() {
	const [play, setPlay] = useState(false);
	const [reset, setReset] = useState(false);

	return (
		<View style={styles.container}>
			<ActionBar
				onPlay={() => setPlay((play) => !play)}
				onReset={() => {}}
				onNew={() => setReset((reset) => !reset)}
			/>
			<Counter play={play} />
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
