import { StatusBar } from "expo-status-bar";
import { Drawer} from './src/components/DrawerRouter'
import { NavigationContainer } from "@react-navigation/native";
    
export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light"/>
            <Drawer/>
        </NavigationContainer>
    );
}