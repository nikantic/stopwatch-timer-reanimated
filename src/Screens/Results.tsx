import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Button from "../components/Button";

import ResultsItem from "../components/ResultsItem";
import COLORS from "../config/colors";
import AppContext from "../config/context";
import { BUTTON_TYPES } from "../config/types";

export default function Results() {
	const { saved, controls } = useContext(AppContext);
	const [sorted, setSorted] = useState(false);
	const normalSaved =
		saved &&
		[...saved].map((item, index) => {
			return {
				start: index,
				time: item,
			};
		});
	const fastestSaved = [...normalSaved].sort((a, b) => a.time - b.time);

	return (
		<View style={styles.container}>
			<View style={styles.tableGroup}>
				<View style={styles.header}>
					<Text style={[styles.headerItem, styles.position]}>Pos</Text>
					<Text style={[styles.headerItem, styles.time]}>Start</Text>
				</View>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={sorted ? fastestSaved : normalSaved}
					renderItem={({ item }) => (
						<ResultsItem time={item.time} index={item.start} />
					)}
					keyExtractor={(item) => item.start.toString()}
				/>
			</View>
			<View style={styles.buttonGroup}>
				<View style={styles.button}>
					<Button
						type={BUTTON_TYPES.TEXT}
						color={COLORS.MAIN}
						size={50}
						onPress={() => setSorted((sorted) => !sorted)}
						text="Sort"
					/>
				</View>
				<View style={styles.button}>
					<Button
						type={BUTTON_TYPES.TEXT}
						color={COLORS.INACTIVE}
						size={50}
						onPress={() => controls.openModal && controls.openModal(false)}
						text="Close"
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 5,
		maxWidth: 500,
		width: "80%",
	},
	tableGroup: {
		flex: 3,
	},
	buttonGroup: {
		flex: 1,
		flexDirection: "row",
	},
	button: {
		flex: 1,
	},
	header: {
		flexDirection: "row",
	},
	headerItem: {
		color: COLORS.GRAY,
		paddingVertical: 10,
		fontSize: 16,
		textAlign: "center",
		textTransform: "uppercase",
	},
	position: {
		flex: 1,
	},
	time: {
		flex: 2,
	},
});
