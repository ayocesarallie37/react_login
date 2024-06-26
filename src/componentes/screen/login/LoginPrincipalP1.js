import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const LoginPrincipalP1 = () => {
  return (
    <View style={styles.contenedor}>
        <Text style={styles.titulo}>Hola</Text>
        <Text style={styles.title2}>Iniciar sesión</Text>
        <View style={styles.contenedorinput}>
        <TextInput
            style={styles.input}
            placeholder="Usuario"
            keyboardType="text"
        />

        <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Contraseña"
            keyboardType="text"
        />

            <View style={{alignItems:"center"}}>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert('Procesando...')}>
                    <Text style={{color:"white", textAlign:"center"}}>Logg In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default LoginPrincipalP1

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#cdcdcd'
    },

    titulo: {
        textAlign:'center',
        fontSize:53,
        color:'black',
        fontWeight:'bold'
    },

    title2: {
        textAlign:'center',
        fontSize:20
    },

    contenedorinput: {
        padding:15,
    },

    input: {
        marginTop:10,
        backgroundColor:'white',
        padding:10,
        borderRadius:10,
    },

    button: {
        backgroundColor: "#C46908",
        marginTop:15,
        padding:10,
        borderRadius:15,
        width:250
    }
})

//rnfes = Armar el esqueleto anterior.
