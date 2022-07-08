import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { IControls, CLOCK_TYPES, ITime } from "../config/types";
import ActionBar from "../Partials/ActionBar";
import Clock from "../Partials/Clock";
import AppContext from "../config/context";
import ModalWrapper from "../components/ModalWrapper";
import TimerEdit from "../Screens/TimerEdit";
import inits from "../config/inits";

export default function Timer() {
	const [play, setPlay] = useState(false);
	const [reset, setReset] = useState(0);
	const [timer, setTimer] = useState(inits.timerTime);
	const [modalOpen, setModalOpen] = useState(false);
	const handleReset = () => setReset((reset) => reset + 1);

	const controls: IControls = {
		play: () => setPlay((play) => !play),
		reset: () => {
			setPlay(false);
			handleReset();
		},
		edit: (newTime: ITime) => {
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
				<Clock type={CLOCK_TYPES.TIMER} style={styles.clock} timer={timer} />
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
	},
	clock: {
		flex: 2,
	},
});
