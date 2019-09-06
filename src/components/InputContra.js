import React from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';


const InputContra = ({ value, onChangeText}) =>{
    return(
      <View style={styles.containerInput}>
        <Image source={require('../../assets/iconos/iconocontra.png')} style={styles.imagen} />
        <TextInput
        secureTextEntry
        placeholder="CONTRASEÑA"
        value={value}
        onChangeText={onChangeText}
        style={styles.inputs}>
        </TextInput>
      </View>
    );
}

export default InputContra;
/*export default class InputContra extends React.Component{
  render(){
    return(
      <View style={styles.containerInput}>
        <Image source={require('../../assets/iconos/iconocontra.png')} style={styles.imagen} />
        <TextInput
        secureTextEntry
        placeholder="CONTRASEÑA"
        onChangeText={onChangeText}
        value={value}
        style={styles.inputs}>
        </TextInput>
      </View>
    );
  }
}*/

const styles = StyleSheet.create({
  inputs: {
    color: 'white',
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 5,
    width: 300,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  imagen: {
    height: 30,
    width: 30,
    position: 'absolute',
    marginTop: 15,
  },
  containerInput:{
    flexDirection: 'row',
  },
});
