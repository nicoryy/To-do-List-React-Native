import { StatusBar } from "expo-status-bar";
import { Drawer } from "./src/components/DrawerRouter";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";

export default function App() {
    const theme = useColorScheme();

    console.log(theme);

    return (
        <NavigationContainer>
            <StatusBar style={theme} />
            <Drawer />
        </NavigationContainer>
    );
}
