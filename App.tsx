import { View, StyleSheet } from "react-native";

import COLORS from "./src/config/colors";
import StopwatchScreen from "./src/screens/StopwatchScreen";
import TimerScreen from "./src/screens/TimerScreen";

export default function App() {
	return (
		<View style={styles.container}>
			{/* <StopwatchScreen /> */}
			<TimerScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BLACK,
	},
});
