import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Profile from './../screens/Profile';


export default class Mail extends React.Component{
  render(){
    return(
      <View style={styles.mailContainer}>
        <Image
        source={require('./../../assets/iconos/iconoemail.png')}
        style={styles.mailIcon}
        />
        <Text style={styles.textMail}>{this.props.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mailContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  mailIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  textMail: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#A4A4A4',
    fontWeight: 'bold',
  },
});
