// import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../../screens/home";
import { Dimensions } from "react-native";

const { Navigator, Screen } = createDrawerNavigator();

export function Drawer() {
    const screenWidth = Dimensions.get("window").width;

    return (
        <Navigator
            screenOptions={{ swipeEdgeWidth: screenWidth, headerShown: false }}
        >
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    );
}
