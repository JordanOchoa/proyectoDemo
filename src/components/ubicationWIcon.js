import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Profile from './../screens/Profile';


export default class Ubication extends React.Component{
  render(){
    return(
      <View style={styles.ubicationContainer}>
        <Image
        source={require('./../../assets/iconos/iconoubicacion.png')}
        style={styles.ubicationIcon}
        />
        <Text style={styles.textJob}>
          Colima, Colima
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ubicationContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  ubicationIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  textJob: {
    fontSize: 14,
    color: '#A4A4A4',
  },
});
