import React, { Component } from 'react';
import {  View, StyleSheet, TextInput, Alert } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Text, Button } from 'react-native-elements';
import * as sup from '../../App';

import Screen1 from './screen1';

export default class Screen2 extends React.Component{

  static navigationOptions = {
      header: null,
      title: 'Ingresa tus datos de perfil',
      headerStyle: {
        backgroundColor: '#424242',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    };
  static tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
    },
  }


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
      <View style={{backgroundColor: '#0a0a0a', flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#424242', justifyContent: 'center'}}>
          <Text h4 style={{color: 'white'}}>Ingresa los datos de perfil</Text>
        </View>
        <View style={{flex: 7, justifyContent: 'space-between', backgroundColor: '#0a0a0a'}}>
          <Input
            placeholder='Tu nombre completo va aquí'
            placeholderTextColor="#6E6E6E"
            leftIcon={
              <Icon
                name='user'
                type='FontAwesome5'
                size={30}
                color='#BDBDBD'
              />
            }
            value={this.state.name}
            onChangeText={name => this.setState({name})}
          />
          <Input
            placeholder='¿A qué te dedicas?'
            value={this.state.job}
            onChangeText={job => this.setState({job})}
            placeholderTextColor="#6E6E6E"
            leftIcon={
              <Icon
                name='suitcase'
                type='FontAwesome5'
                size={30}
                color='#BDBDBD'
              />
            }
          />
          <Input
            placeholder='Ingresa el lugar de tu nacimiento'
            value={this.state.birthDate}
            onChangeText={birthDate => this.setState({birthDate})}
            placeholderTextColor="#6E6E6E"
            leftIcon={
              <Icon
              name='columns'
              type='FontAwesome5'
                size={30}
                color='#BDBDBD'
              />
            }
          />
          <Input
            placeholder='Añade una descripción!'
            value={this.state.description}
            onChangeText={description => this.setState({description})}
            placeholderTextColor="#6E6E6E"
            leftIcon={
              <Icon
                name='book'
                type='FontAwesome'
                size={30}
                color='#BDBDBD'
              />
            }
          />
          <Input
            placeholder='Ingresa tu numero de teléfono'
            value={this.state.phoneNumber}
            onChangeText={phoneNumber => this.setState({phoneNumber})}
            placeholderTextColor="#6E6E6E"
            leftIcon={
              <Icon
                name='phone'
                type='FontAwesome'
                size={30}
                color='#BDBDBD'
              />
            }
          />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button
            buttonStyle={{backgroundColor: '#D8D8D8', width: '95%', alignSelf: 'center'}}
            title="Ingresar datos"
            type="outline"
            onPress={() =>
              this.uploadUserInfo()
            }
          />
        </View>
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
