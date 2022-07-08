import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { BUTTON_TYPES } from "../config/types";
import COLORS from "../config/colors";

type IButtonDefaults = {
	iconSize?: number;
	iconColor?: COLORS;
	maxScale?: number;
	styles?: ViewStyle;
	textStyles?: TextStyle;
};

const setDefaults = ({
	iconSize = 34,
	iconColor = COLORS.WHITE,
	maxScale = 1.3,
	styles,
	textStyles,
}: IButtonDefaults) => {
	return {
		iconSize,
		iconColor,
		maxScale,
		styles,
		textStyles,
	};
};

const useButtonDefaults = ({
	type = BUTTON_TYPES.RECTANGLE,
	size = 80,
}: {
	type?: BUTTON_TYPES;
	size?: number;
}) => {
	const styles = StyleSheet.create({
		[BUTTON_TYPES.CIRCLE]: {
			width: size,
			height: size,
			borderRadius: size / 2,
		},
		[BUTTON_TYPES.RECTANGLE]: {
			width: size + 50,
			height: size,
			borderRadius: size,
			borderColor: COLORS.GRAY,
			borderStyle: "solid",
			borderWidth: 1,
		},
		[BUTTON_TYPES.TEXT]: {
			width: size + 70,
			height: size,
			borderRadius: size,
		},
	});

	const textStyles = StyleSheet.create({
		text: {
			textTransform: "uppercase",
			color: COLORS.WHITE,
			fontSize: 18,
		},
	});

	const defaults: { [key in BUTTON_TYPES]: IButtonDefaults } = {
		[BUTTON_TYPES.CIRCLE]: setDefaults({
			styles: styles[type],
		}),
		[BUTTON_TYPES.RECTANGLE]: setDefaults({
			iconSize: 24,
			iconColor: COLORS.GRAY,
			maxScale: 1.2,
			styles: styles[type],
		}),
		[BUTTON_TYPES.TEXT]: setDefaults({
			maxScale: 1.1,
			styles: styles[type],
			textStyles: textStyles.text,
		}),
	};

	return defaults[type];
};

export default useButtonDefaults;
