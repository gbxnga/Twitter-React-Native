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

import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Tweet from '../Tweet'
import {NavigationActions} from 'react-navigation';

//import twitter, {auth} from 'react-native-twitter';
import axios from "axios";
import Modal from "react-native-modal";
//import Twitter from "twitter"
//import Twit from 'twit'



class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

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
    //BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    console.log('home mounted')
    
    axios.get(`https://randomuser.me/api/`)
    .then(response => {
      console.log(response)
      return response
    })
    .then(json => {

      console.log(json)
        
      
      $("#place-order-btn").removeAttr("disabled").html('Place Order');
    })
    .catch((error) => {
        console.log(` ${error}`)
    });

  }
  componentWillUnmount() {
    //BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
   // return true
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
    //alert(JSON.stringify(this.props.navigation))

    let i;

    return (

      <SafeAreaView style={styles.container}>
      
      <StatusBar barStyle="default" backgroundColor="rgb(27, 42, 51)" />

        
        <TweetList navigation={this.props.navigation}/>

        <Modal
  isVisible={false}
  //onBackdropPress={() => this.setState({ isVisible: false })}
>
  <View style={{ flex: 1 , justifyContent: 'center', alignItems:"center"}}>
  <View style={{width:"80%", height:100, backgroundColor:"rgb(27, 40, 54)", borderRadius:4}}>
    <Text style={{color:"white"}}>I am the modal content!</Text>
    </View>
  </View>
</Modal>
        
      </SafeAreaView>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems:'center',
    backgroundColor: 'rgb(27, 40, 54)'
  }
})
