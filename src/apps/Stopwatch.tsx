import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

import { BUTTON_TYPES, COLOR_TYPES, IControls } from "../config/types";
import ActionBar from "../Partials/ActionBar";
import Clock from "../Partials/Clock";
import AppContext from "../config/context";
import ModalWrapper from "../components/ModalWrapper";
import Results from "../Screens/Results";
import Button from "../components/Button";
import COLORS from "../config/colors";

export default function Stopwatch() {
	const [play, setPlay] = useState(false);
	const [reset, setReset] = useState(0);
	const [saved, setSaved] = useState([] as number[]);
	const [modalOpen, setModalOpen] = useState(false);
	const elapsed = useRef(0);
	const handleReset = () => setReset((reset) => reset + 1);

	COLORS.PRIMARY = COLOR_TYPES.PRIMARY;

	const controls: IControls = {
		play: () => setPlay((play) => !play),
		new: () => {
			if (elapsed.current !== 0) {
				setSaved([...saved, elapsed.current]);
			}
		},
		reset: () => {
			setPlay(false);
			handleReset();
			setSaved([]);
			elapsed.current = 0;
		},
		openModal: (open: boolean) => {
			setModalOpen(open);
		},
	};

	return (
		<AppContext.Provider value={{ play, reset, elapsed, saved, controls }}>
			<View style={styles.container}>
				<Clock style={styles.clock} />
				<View style={styles.bottomGroup}>
					<View style={styles.resultsButton}>
						<Button
							type={BUTTON_TYPES.TEXT}
							color={COLORS.PRIMARY}
							size={80}
							onPress={() => controls.openModal && controls.openModal(true)}
							text={`Results (${saved.length})`}
							disabled={!saved.length}
						/>
					</View>
					<ActionBar style={styles.actionBar} />
				</View>
				<ModalWrapper heading="Results" open={modalOpen}>
					<Results />
				</ModalWrapper>
			</View>
		</AppContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	actionBar: {
		flex: 0,
	},
	clock: {
		flex: 2,
	},
	bottomGroup: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	resultsButton: {
		position: "absolute",
		top: -30,
		elevation: 2,
		zIndex: 2,
	},
});
