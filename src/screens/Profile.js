import React from 'react';
import { Button, View, Text, Image, StyleSheet, ImageBackground, Alert } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import ProfileImage from './../components/ProfileImage';
import Ubication from './../components/ubicationWIcon';
import Spacer from './../components/Spacer';
import Mail from './../components/mailWIcon';
import Phone from './../components/phoneWIcon';

export default class Profile extends React.Component{
  static navigationOptions = {
    header: null
  };
  /*componentDidMount(){
  const user = firebase.auth().currentUser;
    Alert.alert(user.email);
  }*/
  //This functions are not allowed to be here, they´re just test, the final version are in the file firebaseAPI.js
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
  componentDidMount(){
    const user = firebase.auth().currentUser;
    firebase.firestore().collection("users").doc(user.email).get().then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
      this.setState({ name: doc.data().name })
      this.setState({ job: doc.data().job })
      this.setState({ birthDate: doc.data().birthDate })
      this.setState({ description: doc.data().description })
      this.setState({ phoneNumber: doc.data().phoneNumber })
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });
  }
  render(){
    const user = firebase.auth().currentUser;
    return(
      <View style={styles.container}>
        <View style={styles.subContainerTop}>
            <ProfileImage />
            <Text style={styles.textName}>{this.state.name}</Text>
            <Text style={styles.textJob}>{this.state.job}</Text>
            <Ubication />
        </View>
        <View style={styles.subContainerBot}>
          <View>
            <View>
              <View>
                <Text style={{fontSize: 24, paddingLeft: 10, color: '#FAFAFA'}}>About Jordan:</Text>
                <Spacer />
              </View>
              <View>
                <Text style={styles.textDescription}>
                  {this.state.description}
                </Text>
                <View style={{width: '95%',  borderBottomColor: '#151515', borderBottomWidth: 1, alignSelf: 'center', marginTop: 5,}}></View>
              </View>
            </View>
            <View style={styles.defaultContainer}>
              <View></View>
              <Mail email={firebase.auth().currentUser.email}/>
              <Spacer />
            </View>
            <View style={styles.defaultContainer}>
              <View></View>
              <Phone phoneNumber={this.state.phoneNumber}/>
              <Spacer />
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  subContainerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#0a0a0a',
  },
  subContainerBot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020',
  },
  defaultContainer:{
    flex: 1,
    justifyContent: 'space-between'
  },
  textDescription: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#A4A4A4',
  },
  textName: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    color: '#FAFAFA',
  },
  textJob: {
    fontSize: 14,
    color: '#A4A4A4',
  },
});
