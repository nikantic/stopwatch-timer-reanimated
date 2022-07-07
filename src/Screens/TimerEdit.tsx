import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/Button";
import COLORS from "../config/colors";
import { BUTTON_TYPES } from "../config/types";

export default function TimerEdit() {
	return (
		<View style={styles.buttonGroup}>
			<View style={styles.button}>
				<Button
					type={BUTTON_TYPES.TEXT}
					color={COLORS.TRANSPARENT}
					size={50}
					onPress={() => {}}
					text="Cancel"
				/>
			</View>
			<View style={styles.button}>
				<Button
					type={BUTTON_TYPES.TEXT}
					color={COLORS.MAIN}
					size={50}
					onPress={() => {}}
					text="Save"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonGroup: {
		flexDirection: "row",
	},
	button: {
		marginHorizontal: 10,
	},
});
