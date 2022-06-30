import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/Button";
import { BUTTON_TYPES, ICONS } from "../config/types";
import COLORS from "../config/colors";

export default function ActionBar({
	onReset,
	onPlay,
	onNew,
}: {
	onReset: () => void;
	onPlay: () => void;
	onNew: () => void;
}) {
	return (
		<View style={styles.container}>
			<Button
				color={COLORS.BLACK}
				icon={ICONS.RESET}
				size={50}
				onPress={onReset}
			/>
			<Button
				type={BUTTON_TYPES.CIRCLE}
				icon={ICONS.PLAY}
				color={COLORS.MAIN}
				secondIcon={ICONS.PAUSE}
				size={90}
				onPress={onPlay}
			/>
			<Button icon={ICONS.ADD} color={COLORS.BLACK} size={50} onPress={onNew} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		bottom: 50,
	},
});
