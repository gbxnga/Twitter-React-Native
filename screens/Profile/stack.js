import React from 'react'
import {Image, StyleSheet} from 'react-native'
import { Button, Card } from 'react-native-elements';
import {StackNavigator} from 'react-navigation'

import ProfileScreen from './screen'

export default ProfileStack =  StackNavigator({
    Profile: {
      screen: ({navigation}) =>  <ProfileScreen navigation={navigation}/>,
      
      navigationOptions: ({navigation}) => ( {
    
        /*headerBackground: (
          <Image
            style={[StyleSheet.absoluteFill]}
            //style={{width:"100%"}}
            source={require('../../assets/images/banner.jpeg')}
          />
        ),
        headerTitleStyle: { color: 'red' },
        headerStyle:{
          height:120
        },
        headerLeft: () => (<Button
          //icon={() => <MaterialIcons name='clear' size={20} color="rgb(29, 161, 242)"/>}
          icon={{name: 'clear', type: 'material', style: {color:"white", size:30} }}
          buttonStyle={{backgroundColor:'transparent',borderColor:"red",borderWidth:2, elevation:8 }}
          onPress={() => navigation.dispatch(NavigationActions.back())}
        />),
        headerRight: () => (<Button
          //icon={() => <MaterialIcons name='clear' size={20} color="rgb(29, 161, 242)"/>}
          icon={{name: 'clear', type: 'material', style: {color:"white", size:30} }}
          buttonStyle={{backgroundColor:'transparent',borderColor:"red",borderWidth:2, elevation:8 }}
          onPress={() => navigation.dispatch(NavigationActions.back())}
        />),
        */
        header:null
      })
      
    }
});

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(27, 40, 54)',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });