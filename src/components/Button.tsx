import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

import COLORS from "../config/colors";
import { ICONS, BUTTON_TYPES } from "../config/types";
import useButtonAnimation from "../hooks/useButtonAnimation";

export default function Button({
	type = BUTTON_TYPES.CIRCLE,
	icon,
	secondIcon,
	size = 80,
	onPress,
	color,
}: {
	type?: BUTTON_TYPES;
	icon: ICONS;
	secondIcon?: ICONS;
	size?: number;
	color: COLORS;
	onPress: () => void;
}) {
	const [activeIcon, setActiveIcon] = useState(icon);
	const buttonAnimation = useButtonAnimation({
		color,
		maxScale: type === BUTTON_TYPES.CIRCLE ? 1.3 : 1.2,
	});

	const handlePress = () => {
		onPress();
		buttonAnimation.scaleIn();
		if (secondIcon) {
			setActiveIcon(activeIcon === icon ? secondIcon : icon);
			buttonAnimation.animateBgColor();
		}
	};

	return (
		<Pressable
			onPressIn={handlePress}
			onPressOut={buttonAnimation.scaleOut}
			style={styles.container}
		>
			<Animated.View
				style={[
					buttonAnimation.animStyle,
					{
						width: type === BUTTON_TYPES.CIRCLE ? size : size + 50,
						height: type === BUTTON_TYPES.CIRCLE ? size : size,
						borderRadius: type === BUTTON_TYPES.CIRCLE ? size / 2 : size,
					},
					type !== BUTTON_TYPES.CIRCLE && styles.outline,
				]}
			/>
			<View style={styles.icon}>
				<Feather
					style={activeIcon === ICONS.PLAY && styles.playIcon}
					name={activeIcon}
					size={type === BUTTON_TYPES.CIRCLE ? 34 : 24}
					color={type === BUTTON_TYPES.CIRCLE ? COLORS.WHITE : COLORS.GRAY}
				/>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	outline: {
		borderColor: COLORS.GRAY,
		borderStyle: "solid",
		borderWidth: 1,
	},
	icon: {
		position: "absolute",
	},
	playIcon: {
		marginLeft: 5,
	},
});
