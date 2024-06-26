import { StyleSheet, View, Alert } from 'react-native'
import { Text, TextInput, Button, Icon } from 'react-native-paper'
import React from 'react'
import Fromnuevouser from './Fromnuevouser';

const LoginP2 = () => {
  // Poner un estado.
  const [user, onchageUser] = React.useState("")
  // console.log('Dato user puesto es: ',user)
  const [password, onchangePass] = React.useState("")

  const [verpassword, setVerPassword] = React.useState(true)

  // Crear funciones
  const IngresarUsuario = () => {
    if(user === ''){
      Alert.alert('El campo del usuario no debe estar vacío.')
    } if (password === '') {
      Alert.alert('El campo password no debe estar vacío.')
    } else {
      // Se valida los datos que ingresamos.
      Alert.alert(user,password)
    }
  }

  return (
    <View style={styles.contenedorprincipal}>
      <Text style={{ textAlign: "center" }} variant="displayLarge">olaa</Text>
      <Text style={{ textAlign: "center" }} variant="headlineLarge">Inicia sesión</Text>

      <View style={styles.contenedorinput}>
        <TextInput
          label="Usuario"
          value={user}
          onChangeText={onchageUser}
          keyboardType='text'
        />

        <TextInput
          secureTextEntry = {verpassword}
          style={{ marginTop: 10 }}
          label="Password"
          onChangeText={onchangePass}
          value={password}
          right={<TextInput.Icon icon="eye" onPress={()=>setVerPassword(!verpassword)} />}
        />

        <Button
          theme={{ colors: { primary: 'green' } }} 
          style={{ marginTop: 20 }} 
          icon="login" 
          mode="contained"
          onPress={IngresarUsuario}>
            Iniciar sesión
        </Button>
      </View>

      <Fromnuevouser/>

    </View>
  );
};

export default LoginP2

const styles = StyleSheet.create({
  contenedorprincipal: {
    flex: 1,
    backgroundColor: "#cdcdcd",
    justifyContent: "center",
    alignItems: "center"
  },

  contenedorinput: {
    padding: 15
  }

})