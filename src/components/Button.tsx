import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

import COLORS from "../config/colors";
import { ICONS, BUTTON_TYPES, COLOR_TYPES } from "../config/types";
import useButtonAnimation from "../hooks/useButtonAnimation";
import useButtonDefaults from "../hooks/useButtonDefaults";
import GLOBAL_STYLES from "../styles/global";

export default function Button({
	type,
	icon,
	secondIcon,
	size,
	onPress,
	text,
	color = COLORS.PRIMARY,
	secondIconState,
	disabled,
}: {
	type?: BUTTON_TYPES;
	icon?: ICONS;
	secondIcon?: ICONS;
	secondIconState?: boolean;
	size?: number;
	text?: string;
	color?: COLOR_TYPES;
	onPress: () => void;
	disabled?: boolean;
}) {
	const [activeIcon, setActiveIcon] = useState(icon);
	const buttonDefaults = useButtonDefaults({ type, size });
	const buttonAnimation = useButtonAnimation({
		color: disabled ? COLORS.INACTIVE : color,
		maxScale: buttonDefaults.maxScale,
	});

	const toggleIcon = () => {
		if (secondIcon) {
			setActiveIcon(secondIconState ? secondIcon : icon);
			buttonAnimation.animateBgColor(secondIconState ? false : true);
		}
	};

	const handlePress = () => {
		if (!disabled) {
			onPress();
			buttonAnimation.scaleInAndOut();
		}
	};

	useEffect(toggleIcon, [secondIconState]);

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				<Animated.View
					style={[buttonAnimation.animStyle, buttonDefaults.styles]}
				/>
				{type === BUTTON_TYPES.TEXT ? (
					<Text
						style={[
							buttonDefaults.textStyles,
							styles.absolute,
							GLOBAL_STYLES.text,
							disabled && styles.disabledText,
						]}
					>
						{text}
					</Text>
				) : (
					<View style={styles.absolute}>
						<Feather
							style={activeIcon === ICONS.PLAY && styles.playIcon}
							name={activeIcon}
							size={buttonDefaults.iconSize}
							color={buttonDefaults.iconColor}
						/>
					</View>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	absolute: {
		position: "absolute",
	},
	playIcon: {
		marginLeft: 5,
	},
	disabledText: {
		opacity: 0.5,
	},
});
