import { View, StyleSheet } from "react-native";

import COLORS from "./src/config/colors";
import StopwatchScreen from "./src/screens/StopwatchScreen";

export default function App() {
	return (
		<View style={styles.container}>
			<StopwatchScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BLACK,
	},
});
