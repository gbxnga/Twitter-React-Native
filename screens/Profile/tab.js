import React, {Component} from 'react'
import {Image, StyleSheet, ScrollView, View, Text} from 'react-native'
import { Button, Card } from 'react-native-elements';
import {TabNavigator} from 'react-navigation'

import TweetList from '../Tweet/list'

class ProfileScreenDetails extends Component {

    constructor(){
      super()
      this.state = {
        loading: true,
        val:0,

      }
      this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount(){
  
      this.setState({loading:false})
  
    }
    handleScroll(event) {
      this.setState({val:event.nativeEvent.contentOffset.y})
     }
  
    render(){
  
      const {loading,val} = this.state
  
  
      return (
        <ScrollView onScroll={this.handleScroll} scrollEnabled={true} style={{marginBottom:val,width:"100%", borderColor:"black", borderWidth:0.8, marginBottom:0, backgroundColor:"rgb(36, 52, 71)"}}>        
          { loading ?  <Text>Loading Tweets</Text> : <TweetList navigation={this.props.navigation} number={20}/> }
        </ScrollView>
      )
    }  
}

export default ProfileScreenTab =  TabNavigator({
    Tweets: {
      screen: ProfileScreenDetails, 
      navigationOptions: {
        tabBarLabel: 'Tweets',
      }
  
    },
    TweetsReplies: {
      screen: () => <View><Text>Loaded Tweets</Text></View>,
      navigationOptions: {
        tabBarLabel: 'Tweets & Replies',
        tabBarOptions:{
          style:{
            backgroundColor:"red" 
          }
        }

      }
    },
    Media: {
      screen:  () => <View><Text>Loaded Tweets</Text></View>, 
      navigationOptions: {
        tabBarLabel: 'Media',
      }
  
    },
    Likes: {
      screen:  () => <View><Text>Loaded Tweets</Text></View>,
      navigationOptions: {
        tabBarLabel: 'Likes',
      }
    },
    
  }, {
    tabBarPosition: 'top',
    //tabBarComponent: (props) => <WrappedTabs {...props}/>,
    animationEnabled: true,
    //swipeEnabled: false,
    
    tabBarOptions: {
      scrollEnabled:true,
      showIcon: true,
      showLabel:true,
      titleStyle: {
          justifyContent: 'center',
          alignItems: 'center',
      },
      style: {
        //marginTop:50,
          borderWidth: 0,
          //borderTopWidth: 2,
          //position:'absolute',
          //top:60,
          //left:0,
          //width:'100%',
          //height:60,
          backgroundColor: 'rgb(36, 52, 71)',
          borderColor: 'red',
          shadowColor:'red',
          elevation:1,
          padding:0 
      },
      //activeBorderBottomColor:"red",
      activeBackgroundColor: 'rgb(0, 79, 114)',
      
      inactiveBackgroundColor: 'rgb(27, 42, 51)',
      labelStyle: {
          fontSize: 10 ,
          fontWeight: 'bold',
          color: '#fff',
  
      },
      iconStyle:{
        marginBottom:5,
        marginTop:5
      },
      tabStyle: {
          //justifyContent: 'center',
          //alignItems: 'center',
          marginBottom:0,
          marginTop:-30,
          paddingLeft:0,
          paddingRight:0,
          width:115 
          //backgroundColor:"red" 
          
      },
      indicatorStyle: {
        borderWidth:2,
        borderColor:"rgb(29, 161, 242)",
        backgroundColor: 'rgb(29, 161, 242)',
        color:"rgb(29, 161, 242)",
    },
  },
  });