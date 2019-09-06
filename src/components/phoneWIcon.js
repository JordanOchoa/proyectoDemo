import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Profile from './../screens/Profile';


export default class Phone extends React.Component{
  render(){
    return(
      <View style={styles.phoneContainer}>
        <Image
        source={require('./../../assets/iconos/iconomobile.png')}
        style={styles.phoneIcon}
        />
        <Text style={styles.textPhone}>{this.props.phoneNumber}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  phoneContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  phoneIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  textPhone: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#A4A4A4',
    fontWeight: 'bold',
  },
});
