import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

import COLORS from "../config/colors";
import { inputValid } from "../helpers/helpers";
import GLOBAL_STYLES from "../styles/global";

export default function TimeInput({
	label,
	max,
	value,
	passValue,
}: {
	label?: string;
	max?: number;
	value: number;
	passValue: (value: number) => void;
}) {
	const [text, setText] = useState(value.toString());

	const handleChange = (input: string) => {
		if (inputValid({ input, max })) {
			setText(input);
			passValue(Number(input));
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				autoFocus
				style={[styles.input, GLOBAL_STYLES.text]}
				onChangeText={(val) => handleChange(val)}
				value={text}
				keyboardType="numeric"
				maxLength={2}
			/>
			{label && <Text style={[styles.label, GLOBAL_STYLES.text]}>{label}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 12,
	},
	input: {
		width: 60,
		height: 60,
		fontSize: 25,
		textAlign: "center",
		borderRadius: 15,
		backgroundColor: COLORS.WHITE,
	},
	label: {
		color: COLORS.GRAY,
		fontSize: 25,
		marginLeft: 4,
		marginTop: 20,
	},
});
