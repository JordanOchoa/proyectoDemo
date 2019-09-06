import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet, TextInput, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import InputUsuario from '../components/InputUsuario';
import InputContra from '../components/InputContra';
import * as FirebaseAPI from '../../firebaseAPI';

export default class Login extends React.Component{
  static navigationOptions = {
    header: null
  };
  state = {email:'', password:'', error: ''};

//This functions are not allowed to be here, they´re just test, the final version are in the file firebaseAPI.js
  /*componentDidMount() {
    FirebaseAPI.watchState(this.props.navigation)
  }*/

  submit() {
    const {email, password, error} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('ProfileScreen'))
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          Alert.alert("An user already use this email to singup, if this is your email, please ");
          });
  }
  submit2() {
    const {email, password, error} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('EditProfileScreen'))
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          Alert.alert("Wrong password! D:"+errorMessage);
        });
  }
  render(){
    return(
      <ImageBackground source={require('../../background-image/image1.jpg')} style={{width: '100%', height: '100%', flex: 1}}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={styles.container}>
            <View style={styles.titulologo}>
              <Text style={styles.paragraph}>
                  Iniciar sesión
              </Text>
            </View>
            <View style={styles.containerInput}>
              <InputUsuario
              value={this.state.email}
              onChangeText={email => this.setState({email})}
              />
            </View>
            <View style={styles.containerInput}>
              <InputContra
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              />
            </View>
            <View style={{flex: 0.5}}>
              <TouchableOpacity
                onPress={() => {
                  this.submit2()
                }}>
                <View style={styles.containerBoton}>
                  <Text style={styles.boton}>Iniciar sesiónn</Text>
                </View>
              </TouchableOpacity>
              <Text style={{color: 'red', fontSize: 36}}>{this.state.error}</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titulologo: {
    alignItems:'center',
    justifyContent: 'center',
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  containerInput:{
    flex: 0.5,
  },
  containerBoton: {
    backgroundColor: '#D8D8D8',
    width: 300,
    alignItems: 'center',
    borderRadius: 5,
  },
  boton: {
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
});
