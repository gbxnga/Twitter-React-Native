import React, {Component} from 'react'
import {Button} from 'react-native-elements'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView, BackHandler, StatusBar, Animated
} from 'react-native'
import TweetList from '../Tweet/list'


import Tweet from '../Tweet'
import {NavigationActions} from 'react-navigation';

import Modal from "react-native-modal";

export default class Home extends Component {
  constructor(){
    super()
  }

  navigateToScreen = route => () => {

    const navigate = NavigationActions.navigate({routeName: route})

    this
      .props
      .navigation
      .dispatch(navigate)
  }
  componentDidMount() {
    
    console.log('home mounted')

  }
  componentWillUnmount() {
    
  }
  onBackPress = () => {
   this.props.navigation.navigate.back() 
    //BackHandler.exitApp()
    const { dispatch, nav } = this.props;
    
    alert(JSON.stringify(nav))  
    //return
    //console.log(JSON.stringify(nav)) 
    if (nav.index === 1) {
      alert('yes')
      //dispatch(NavigationActions.back());
     //NavigationActions.navigate('drawerToggle')
      //BackHandler.exitApp()
      //return false;
      /*Alert.alert(
        'Exit App',
        'Do you want to exit?',
        [
          {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'Yes', onPress: () => BackHandler.exitApp()},
        ],
        { cancelable: false })
  
        return true;*/
   }  
    //navigation.navigate(NavigationActions.back());
    return true;
    
  };

  render() {

    let i;

    return (

      <SafeAreaView style={styles.container}>
      
        <StatusBar barStyle="default" backgroundColor="rgb(27, 42, 51)" />

        
        <TweetList navigation={this.props.navigation}/>
        
      </SafeAreaView>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(27, 40, 54)'
  }
})
