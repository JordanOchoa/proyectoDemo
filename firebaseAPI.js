import * as firebase from 'firebase';
import { Alert } from 'react-native';


export const createUser = (email, password) => {
  console.log('Creating a new user')
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => this.props.navigation.navigate('ProfileScreen'))
}

export const loginUser = (email, password) => {
  console.log('Creating a new user')
  firebase.auth().singInWithEmailAndPassword(email, password)
}

export const watchState = (navigation) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      Alert.alert("Ya estás ingresado"+user.uid);
      navigation.navigate('ProfileFlow');

    } else {
      Alert.alert("No estás ingresado");
      //navigation.navigate('EditProfileScreen');
    }
  });
}

export const uploadUserInfo = () =>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var userspace = user.uid;
    } else {
    }
  });
  const {name, job, birthDate, description, phoneNumber} = this.state;
  firebase.firestore().collection("users").doc(name+user.uid).set({
      name: name,
      job: job,
      birthDate: birthDate,
      description: description,
      phoneNumber: phoneNumber
  });
}
