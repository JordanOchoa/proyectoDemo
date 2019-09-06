import React from 'react';
import { FlatList, View, Text, Button, StyleSheet } from 'react-native';

export default class Screen3 extends React.Component{
  render(){
    const amigos = [
      {name: 'Amigo 1', ager: 20},
      {name: 'Amigo 2', ager: 20},
      {name: 'Amigo 3', ager: 20},
      {name: 'Amigo 4', ager: 20},
      {name: 'Amigo 5', ager: 20},
    ];
    return(
      <View>
        <Text>PANTALLA DE LISTAS, PANTALLA NUMERO 3</Text>
        <FlatList 
          data = {amigos}
          keyExtractor={amigo => amigos.name}
          renderItem = {({item}) =>{
            return <Text style={styles.item}>{item.name} - Edad {item.ager}</Text>
          }}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Screen 2"
          onPress={() => this.props.navigation.navigate('Show')}
        />
        <Button
          title="Screen 1"
          onPress={() => this.props.navigation.navigate('Index')}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 80,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});