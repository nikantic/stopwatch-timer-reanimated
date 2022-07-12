import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { COLOR_TYPES, IControls } from "../config/types";
import ActionBar from "../Partials/ActionBar";
import Clock from "../Partials/Clock";
import AppContext from "../config/context";
import ModalWrapper from "../components/ModalWrapper";
import TimerEdit from "../Screens/TimerEdit";
import inits from "../config/inits";
import COLORS from "../config/colors";

export default function Timer() {
	const [play, setPlay] = useState(false);
	const [reset, setReset] = useState(0);
	const [timer, setTimer] = useState(inits.timerDuration);
	const [modalOpen, setModalOpen] = useState(false);
	const handleReset = () => setReset((reset) => reset + 1);

	COLORS.MAIN = COLOR_TYPES.RED;

	const controls: IControls = {
		play: () => setPlay((play) => !play),
		reset: () => {
			setPlay(false);
			handleReset();
		},
		edit: (newTime: number) => {
			setTimer(newTime);
			setModalOpen(false);
			setPlay(false);
			handleReset();
		},
		openModal: (open: boolean) => {
			setModalOpen(open);
		},
	};

	return (
		<AppContext.Provider value={{ play, reset, controls }}>
			<View style={styles.container}>
				<Clock style={styles.clock} timer={timer} />
				<ActionBar style={styles.actionBar} />
				<ModalWrapper heading="Edit Timer" open={modalOpen}>
					<TimerEdit timer={timer} />
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
		flex: 1,
		marginBottom: 100,
	},
	clock: {
		flex: 4,
	},
});
