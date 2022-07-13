import { View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";

import COLORS from "./src/config/colors";
import Stopwatch from "./src/apps/Stopwatch";
import Timer from "./src/apps/Timer";
import useAppFonts from "./src/hooks/useAppFonts";

export default function App() {
	const fonts = useAppFonts();

	if (!fonts) {
		return <AppLoading />;
	}

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<Stopwatch />
				{/* <Timer /> */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BLACK,
	},
	inner: {
		flex: 1,
		alignSelf: "center",
		maxWidth: 1000,
		width: "100%",
	},
});
