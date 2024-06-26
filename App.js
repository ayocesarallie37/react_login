import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPrincipalP1 from './src/componentes/screen/login/LoginPrincipalP1';
import LoginP2 from './src/componentes/screen/login/LoginP2';
import MenuPrincipal from './src/componentes/screen/Dash/MenuPrincipal'
import Fromnuevouser from './src/componentes/screen/login/Fromnuevouser';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginP2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
