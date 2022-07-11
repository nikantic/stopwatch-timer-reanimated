import React, { useContext } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

import Button from "../components/Button";
import { BUTTON_TYPES, ICONS } from "../config/types";
import COLORS from "../config/colors";
import AppContext from "../config/context";

export default function ActionBar({ style }: { style?: ViewStyle }) {
	const { play, controls } = useContext(AppContext);
	return (
		<View style={[styles.container, style]}>
			{controls.reset && (
				<Button
					color={COLORS.BLACK}
					icon={ICONS.RESET}
					size={50}
					onPress={controls.reset}
				/>
			)}
			{controls.play && (
				<Button
					type={BUTTON_TYPES.CIRCLE}
					icon={ICONS.PLAY}
					color={COLORS.MAIN}
					secondIcon={ICONS.PAUSE}
					secondIconState={play}
					size={90}
					onPress={controls.play}
				/>
			)}
			{controls.new && (
				<Button
					icon={ICONS.ADD}
					color={COLORS.BLACK}
					size={50}
					onPress={() => controls.new && controls.new()}
				/>
			)}
			{controls.edit && (
				<Button
					icon={ICONS.EDIT}
					color={COLORS.BLACK}
					size={50}
					onPress={() => controls.openModal && controls.openModal(true)}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
	},
});
