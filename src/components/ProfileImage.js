import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Profile from './../screens/Profile';


export default class ProfileImage extends React.Component{
  render(){
    return(
      <Image
      source={require('./../../assets/profileimages/userjordan.jpg')}
      style={styles.imageCircle}
      />
    );
  }
}

const styles = StyleSheet.create({
  imageCircle: {
    width: 150,
    height: 150,
    borderRadius: 200 / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
});
