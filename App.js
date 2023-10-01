import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/home';
import { Styles } from './src/styles/global.style';

export default function App() {
  return (
    <View  style={Styles.conteiner}>
      <SafeAreaView>
      <HomeScreen/>
      <StatusBar style='light'/>
      </SafeAreaView>
    </View>
  );
}

