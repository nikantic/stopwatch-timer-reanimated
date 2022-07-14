import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import COLORS from "../config/colors";
import GLOBAL_STYLES from "../styles/global";

export default function TabSwitcher({
	activeIndex,
	setTabIndex,
}: {
	activeIndex: number;
	setTabIndex: (index: number) => void;
}) {
	return (
		<View style={styles.container}>
			<Pressable style={styles.tab} onPress={() => setTabIndex(0)}>
				<Text
					style={[
						GLOBAL_STYLES.text,
						styles.text,
						activeIndex === 0 && styles.primary,
					]}
				>
					Stopwatch
				</Text>
			</Pressable>
			<Pressable style={styles.tab} onPress={() => setTabIndex(1)}>
				<Text
					style={[
						GLOBAL_STYLES.text,
						styles.text,
						activeIndex === 1 && styles.secondary,
					]}
				>
					Timer
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 60,
		marginBottom: 20,
	},
	tab: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: COLORS.WHITE,
		fontSize: 22,
		textTransform: "uppercase",
	},
	primary: {
		color: COLORS.PRIMARY,
	},
	secondary: {
		color: COLORS.SECONDARY,
	},
});
