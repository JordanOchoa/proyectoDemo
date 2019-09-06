import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';


const InputUsuario = ({ value, onChangeText}) =>{
    return(
      <View style={styles.containerInput}>
        <Image source={require('../../assets/iconos/iconousuario.png')} style={styles.imagen} />
        <TextInput
        placeholder="Correo electrónico"
        onChangeText={onChangeText}
        value={value}
        style={styles.inputs}>
        </TextInput>
      </View>
    );
}

export default InputUsuario;

/*export default class InputUsuario extends React.Component{
  constructor(props) {
      super(props);
      this.state = { email: '' };
    }
  render(){
    return(
      <View style={styles.containerInput}>
        <Image source={require('../../assets/iconos/iconousuario.png')} style={styles.imagen} />
        <TextInput
        placeholder="Correo electrónico"
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
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
