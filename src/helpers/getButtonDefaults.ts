import { StyleSheet } from "react-native";
import { BUTTON_TYPES } from "../config/types";
import COLORS from "../config/colors";

export const getButtonDefaults = ({
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
	});

	return type === BUTTON_TYPES.CIRCLE
		? {
				iconSize: 34,
				iconColor: COLORS.WHITE,
				maxScale: 1.3,
				styles: styles[type],
		  }
		: {
				iconSize: 24,
				iconColor: COLORS.GRAY,
				maxScale: 1.2,
				styles: styles[type],
		  };
};
