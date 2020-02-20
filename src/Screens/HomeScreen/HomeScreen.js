import React, { Component } from 'react';
 import {View,Text} from 'native-base'
 import Icon from 'react-native-vector-icons/FontAwesome';
 

export default class Home extends Component {
  render() {
    return (
     <View>
         <Text>this is Home Screen kjk</Text>
         <Icon name="heart-outline" size={30}  />

     </View>
    );
  }
}
