import { StyleSheet, View } from "react-native";

import Button from "./src/components/Button";
import COLORS from "./src/config/colors";
import { ICONS } from "./src/config/types";

export default function App() {
	return (
		<View style={styles.container}>
			<Button
				icon={ICONS.PLAY}
				color={COLORS.MAIN}
				secondIcon={ICONS.PAUSE}
				size={90}
				onPress={() => {}}
			/>
			<View style={{ flexDirection: "row", bottom: 50 }}>
				<Button
					icon={ICONS.FLAG}
					color={COLORS.BLUE}
					size={70}
					onPress={() => {}}
				/>
				<Button
					color={COLORS.RED}
					icon={ICONS.RESET}
					size={70}
					onPress={() => {}}
				/>
			</View>
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
