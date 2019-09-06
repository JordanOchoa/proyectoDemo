import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class Screen1 extends React.Component{
  render(){
    return(
      <View>
        <Text>Esta será la pantalla para agregar la informacion propia de los usuarios</Text>
        <Button
          title="Agregar la información"
          onPress={() => this.props.navigation.navigate('Show')}
        />
      </View>
    );
  }
}
