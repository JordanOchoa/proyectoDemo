import React, { Component } from 'react';
import { Button, View, StyleSheet, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text } from 'react-native-elements';
import * as sup from '../../App';

import Screen1 from './screen1';

export default class Screen2 extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      birthDate: '',
      description: '',
      phoneNumber: ''
    }
  }


  //state = {name:'', job:'', birthDate: '', description: '', phoneNumber: ''};
//This functions are not allowed to be here, they´re just test, the final version are in the file firebaseAPI.js
   uploadUserInfo (){
    const user = firebase.auth().currentUser;
    const {name, job, birthDate, description, phoneNumber} = this.state;
    let data = {
      name: this.state.name,
      job: this.state.job,
      birthDate: this.state.birthDate,
      description: this.state.description,
      phoneNumber: this.state.phoneNumber,
    };
    firebase.firestore().collection("users").doc(user.email).set(data).then(() => {
      this.props.navigation.navigate('ProfileScreen')
    });
    firebase.firestore().collection("users").doc(user.email).get().then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
      Alert.alert(doc.data().name)
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });
  }
  render(){
    return(
      <View>
      <Text h3>Edita tus datos!</Text>
        <Input
          placeholder='Tu nombre completo va aquí'
          leftIcon={
            <Icon
              name='user'
              size={40}
              color='black'
            />
          }
          value={this.state.name}
          onChangeText={name => this.setState({name})}
        />
        <Input
          placeholder='¿A qué te dedicas?'
          value={this.state.job}
          onChangeText={job => this.setState({job})}
        />
        <Input
          placeholder='¿De dónde eres?'
          value={this.state.birthDate}
          onChangeText={birthDate => this.setState({birthDate})}
        />
        <Input
          placeholder='Añade una descripción!'
          value={this.state.description}
          onChangeText={description => this.setState({description})}
        />
        <Input
          placeholder='Ingresa tu numero de teléfono'
          value={this.state.phoneNumber}
          onChangeText={phoneNumber => this.setState({phoneNumber})}
        />
        <Button
          title="Screen 1"
          onPress={() =>
            this.uploadUserInfo()
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 45,
  },
  presentacion: {
    fontSize: 20,
  },
});
