import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { IControls, CLOCK_TYPES } from "../config/types";
import ActionBar from "../Partials/ActionBar";
import Clock from "../Partials/Clock";
import AppContext from "../config/context";
import ModalWrapper from "../components/ModalWrapper";
import TimerEdit from "../Screens/TimerEdit";

export default function Timer() {
	const [play, setPlay] = useState(false);
	const [reset, setReset] = useState(false);
	const controls: IControls = {
		play: () => setPlay((play) => !play),
		reset: () => {
			setPlay(false);
			setReset(true);
		},
		edit: () => {
			// set time to
		},
	};

	useEffect(() => {
		if (reset && play) {
			setReset(false);
		}
	}, [reset, play]);

	return (
		<AppContext.Provider value={{ play, reset, controls }}>
			<View style={styles.container}>
				<Clock type={CLOCK_TYPES.TIMER} style={styles.clock} />
				<ActionBar style={styles.actionBar} />
				<ModalWrapper heading="Edit Timer">
					<TimerEdit />
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
