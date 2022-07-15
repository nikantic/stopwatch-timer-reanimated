import React, { useContext } from "react";
import { View, StyleSheet, Modal, Text } from "react-native";

import COLORS from "../config/colors";
import AppContext from "../config/context";
import GLOBAL_STYLES from "../styles/global";

export default function ModalWrapper({
	open,
	heading,
	children,
}: {
	open: boolean;
	heading: string;
	children: JSX.Element;
}) {
	const { controls } = useContext(AppContext);

	return (
		<Modal
			transparent
			animationType="slide"
			visible={open}
			onRequestClose={() => {
				controls.openModal && controls.openModal(false);
			}}
		>
			<View style={styles.modalView}>
				<Text style={[styles.heading, GLOBAL_STYLES.text]}>{heading}</Text>
				<View style={styles.childrenView}>{children}</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalView: {
		position: "absolute",
		width: "101%",
		left: -1,
		height: "70%",
		backgroundColor: COLORS.BLACK,
		borderTopLeftRadius: 30,
		borderTopEndRadius: 30,
		bottom: 0,
		alignItems: "center",
		borderColor: COLORS.INACTIVE,
		borderStyle: "solid",
		borderWidth: 1,
		elevation: 5,
		zIndex: 5,
	},
	heading: {
		marginVertical: 20,
		fontSize: 22,
		color: COLORS.WHITE,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.GRAY,
	},
	childrenView: {
		flex: 1,
		width: "100%",
		alignItems: "center",
	},
});
