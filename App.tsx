import { View, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import COLORS from "./src/config/colors";
import Stopwatch from "./src/apps/Stopwatch";
import Timer from "./src/apps/Timer";

const Tab = createBottomTabNavigator();

const myTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: COLORS.PRIMARY,
		background: COLORS.BLACK,
	},
};

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.inner}>
				<NavigationContainer theme={myTheme}>
					<Tab.Navigator
						screenOptions={{
							headerShown: false,
							tabBarActiveBackgroundColor: COLORS.BLACK,
							tabBarInactiveBackgroundColor: COLORS.BLACK,
							tabBarLabelStyle: {
								fontWeight: "700",
								fontSize: 20,
								textTransform: "uppercase",
							},
							tabBarLabelPosition: "beside-icon",
							tabBarIconStyle: { display: "none" },
							tabBarStyle: {
								borderTopWidth: 0,
								borderBottomWidth: 0,
								height: 100,
							},
						}}
					>
						<Tab.Screen name="Stopwatch" component={Stopwatch} />
						<Tab.Screen
							name="Timer"
							component={Timer}
							options={{ tabBarActiveTintColor: COLORS.SECONDARY }}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.BLACK,
	},
	inner: {
		flex: 1,
		alignSelf: "center",
		maxWidth: 1000,
		width: "100%",
	},
});
