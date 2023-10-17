// import 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../../screens/home";
import { Dimensions } from "react-native";
import { Styles } from "../../styles/drawer.style";

const { Navigator, Screen } = createDrawerNavigator();

export function Drawer() {
    const screenWidth = Dimensions.get("window").width;

    return (
        <Navigator
            screenOptions={{
                swipeEdgeWidth: screenWidth,
                headerShown: false,
                // drawerContentStyle: Styles.conteiner,
            }}
            drawerContent={props => {
              return (
                <DrawerContentScrollView style={Styles.conteiner} {...props}>
                  {/* <DrawerItemList {...props} /> */}
                  <DrawerItem style={Styles.drawerItem} labelStyle={Styles.drawerItemLabel} label="Tema: Escuro" onPress={() => console.log('Call')} />
                </DrawerContentScrollView>
              )
            }}
        >
            <Screen name="Home" component={HomeScreen} />
        </Navigator>
    );
}
