import React from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/Button";
import TimeInput from "../components/TimeInput";
import COLORS from "../config/colors";
import AppContext from "../config/context";
import { BUTTON_TYPES, ITime } from "../config/types";
import { useTimeValidation } from "../hooks/useTimeValidation";

export default function TimerEdit({ timer }: { timer: ITime }) {
	const { controls } = useContext(AppContext);
	const timeValidation = useTimeValidation({ timer });

	return (
		<View style={styles.container}>
			<View style={styles.inputGroup}>
				<TimeInput
					label="h"
					value={timeValidation.time.hours}
					passValue={timeValidation.passTime.hours}
				/>
				<TimeInput
					label="m"
					max={59}
					value={timeValidation.time.minutes}
					passValue={timeValidation.passTime.minutes}
				/>
				<TimeInput
					label="s"
					max={59}
					value={timeValidation.time.seconds}
					passValue={timeValidation.passTime.seconds}
				/>
			</View>
			<View style={styles.buttonGroup}>
				<View style={styles.button}>
					<Button
						type={BUTTON_TYPES.TEXT}
						color={COLORS.TRANSPARENT}
						size={50}
						onPress={() => controls.openModal && controls.openModal(false)}
						text="Cancel"
					/>
				</View>
				<View style={styles.button}>
					<Button
						type={BUTTON_TYPES.TEXT}
						color={COLORS.MAIN}
						size={50}
						onPress={() => controls.edit && controls.edit(timeValidation.time)}
						text="Save"
						disabled={!timeValidation.valid}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	label: {
		color: COLORS.GRAY,
		fontSize: 20,
		fontFamily: "monospace",
	},
	buttonGroup: {
		flex: 1,
		flexDirection: "row",
	},
	button: {
		marginHorizontal: 10,
	},
	inputGroup: {
		flex: 3,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-between",
		top: 50,
	},
});
