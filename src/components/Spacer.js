import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Spacer extends React.Component{
  render(){
    return(
      <View style={styles.spacer}></View>
    );
  }
}

const styles = StyleSheet.create({
  spacer:{
    width: '95%',
    borderBottomColor: '#151515',
    borderBottomWidth: 1,
    alignSelf: 'center'
  },
});
