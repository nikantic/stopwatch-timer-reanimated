import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

import COLORS from "../config/colors";
import { ICONS, BUTTON_TYPES } from "../config/types";
import useButtonAnimation from "../hooks/useButtonAnimation";
import useButtonDefaults from "../hooks/useButtonDefaults";

export default function Button({
	type,
	icon,
	secondIcon,
	size,
	onPress,
	color = COLORS.MAIN,
	secondIconState,
}: {
	type?: BUTTON_TYPES;
	icon: ICONS;
	secondIcon?: ICONS;
	secondIconState?: boolean;
	size?: number;
	color?: COLORS;
	onPress: () => void;
}) {
	const [activeIcon, setActiveIcon] = useState(icon);
	const buttonDefaults = useButtonDefaults({ type, size });
	const buttonAnimation = useButtonAnimation({
		color,
		maxScale: buttonDefaults.maxScale,
	});

	const toggleIcon = () => {
		if (secondIcon) {
			setActiveIcon(secondIconState ? secondIcon : icon);
			buttonAnimation.animateBgColor(secondIconState ? false : true);
		}
	};

	const handlePress = () => {
		onPress();
		buttonAnimation.scaleIn();
	};

	useEffect(toggleIcon, [secondIconState]);

	return (
		<Pressable
			onPressIn={handlePress}
			onPressOut={buttonAnimation.scaleOut}
			style={styles.container}
		>
			<Animated.View
				style={[buttonAnimation.animStyle, buttonDefaults.styles]}
			/>
			<View style={styles.icon}>
				<Feather
					style={activeIcon === ICONS.PLAY && styles.playIcon}
					name={activeIcon}
					size={buttonDefaults.iconSize}
					color={buttonDefaults.iconColor}
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
	icon: {
		position: "absolute",
	},
	playIcon: {
		marginLeft: 5,
	},
});
