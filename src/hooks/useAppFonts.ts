import {
	useFonts,
	ShareTechMono_400Regular,
} from "@expo-google-fonts/share-tech-mono";

const useAppFonts = () => {
	const [fontsLoaded] = useFonts({
		ShareTechMono_400Regular,
	});

	return fontsLoaded;
};

export default useAppFonts;
