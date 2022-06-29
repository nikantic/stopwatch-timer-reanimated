import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

import COLORS from "../config/colors";
import { ICONS } from "../config/types";
import useButtonAnimation from "../hooks/useButtonAnimation";

export default function Button({
	icon,
	secondIcon,
	size = 80,
	onPress,
	color,
}: {
	icon: ICONS;
	secondIcon?: ICONS;
	size?: number;
	color: COLORS;
	onPress: () => void;
}) {
	const [activeIcon, setActiveIcon] = useState(icon);
	const buttonAnimation = useButtonAnimation(color);

	const handlePress = () => {
		if (secondIcon) {
			setActiveIcon(activeIcon === icon ? secondIcon : icon);
			buttonAnimation.animateBgColor();
		}
		onPress();
	};

	return (
		<Pressable
			onPress={handlePress}
			onPressIn={buttonAnimation.scaleIn}
			onPressOut={buttonAnimation.scaleOut}
			style={styles.container}
		>
			<Animated.View
				style={[
					buttonAnimation.animStyle,
					{
						width: size,
						height: size,
						borderRadius: size / 2,
					},
				]}
			/>
			<View style={{ position: "absolute" }}>
				<Feather
					style={activeIcon === ICONS.PLAY && styles.playIcon}
					name={activeIcon}
					size={34}
					color={COLORS.WHITE}
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
	playIcon: {
		marginLeft: 5,
	},
});
