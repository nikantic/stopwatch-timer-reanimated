import { View, StyleSheet } from "react-native";

import COLORS from "./src/config/colors";
import Stopwatch from "./src/apps/Stopwatch";
import Timer from "./src/apps/Timer";

export default function App() {
	return (
		<View style={styles.container}>
			{/* <Stopwatch /> */}
			<Timer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BLACK,
	},
});
