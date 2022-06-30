import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "./src/components/Button";
import SmallClock from "./src/components/SmallClock";
import COLORS from "./src/config/colors";
import { BUTTON_TYPES, ICONS } from "./src/config/types";

export default function App() {
	const [play, setPlay] = useState(false);

	return (
		<View style={styles.container}>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					bottom: 50,
				}}
			>
				<Button
					type={BUTTON_TYPES.RECTANGLE}
					color={COLORS.BLACK}
					icon={ICONS.RESET}
					size={50}
					onPress={() => {}}
				/>
				<Button
					icon={ICONS.PLAY}
					color={COLORS.MAIN}
					secondIcon={ICONS.PAUSE}
					size={90}
					onPress={() => setPlay((play) => !play)}
				/>
				<Button
					type={BUTTON_TYPES.RECTANGLE}
					icon={ICONS.ADD}
					color={COLORS.BLACK}
					size={50}
					onPress={() => {}}
				/>
			</View>
			<SmallClock paused={!play} />
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
