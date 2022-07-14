import { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";

import COLORS from "./src/config/colors";
import Stopwatch from "./src/apps/Stopwatch";
import Timer from "./src/apps/Timer";
import useAppFonts from "./src/hooks/useAppFonts";
import TabSwitcher from "./src/components/TabSwitcher";

export default function App() {
	const [tabIndex, setTabIndex] = useState(0);
	const fonts = useAppFonts();

	if (!fonts) {
		return <AppLoading />;
	}

	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<View style={styles.appContainer}>
					{tabIndex === 0 ? <Stopwatch /> : <Timer />}
				</View>
				<TabSwitcher activeIndex={tabIndex} setTabIndex={setTabIndex} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BLACK,
	},
	appContainer: {
		flex: 1,
	},
	inner: {
		flex: 1,
		alignSelf: "center",
		maxWidth: 1000,
		width: "100%",
	},
});
