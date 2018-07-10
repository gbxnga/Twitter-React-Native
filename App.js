
import React, { Component } from 'react';
import {
  Platform,
  Animated,
  Easing,
  Dimensions,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  YellowBox,TouchableOpacity, Image, TouchableHighlight, TouchableNativeFeedback, ScrollView, BackHandler, AlertAndroid, WebView, PanResponder
} from 'react-native';
import {createTabNavigator,createSwitchNavigator, NavigationActions, StackNavigator, SwitchNavigator, createTopTabNavigator, TabNavigator, createBottomTabNavigator, createStackNavigator, DrawerNavigator, createDrawerNavigator} from 'react-navigation'
import { Button, Card } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeatherIcons from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'

import LoadingScreen from './screens/Loading'

import Home from './screens/Home'
import DrawerContainer from './DrawerContainer'

import Tweet from './screens/Tweet'
import BoldTweet from './screens/Tweet/bold'
import ProfileStack from './screens/Profile/stack'

import Orientation from 'react-native-orientation'
import Notification from './screens/Notification'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
 class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

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

const CreateTweetScreen = ({}) => {

  return (
    <View style={{flex:1}}>
      <View style={[styles.container,  {borderColor:'red', borderWidth:0, flexDirection: 'row', justifyContent:'flex-start', alignItems:'flex-start'}]}>

          <View style={{flex:0.2, borderColor:'red', borderWidth:0, height:100, alignItems:'center', justifyContent:'center'}}>

            <Image
              onPress={() => navigation.navigate('DrawerToggle')}
              source={require('./assets/images/avatar.png')}
              style={{width:40,height:40, borderRadius:50}}
            />

          </View>
          <View style={{flex:0.8, borderColor:'red', borderWidth:0,padding:0}}>
            <TextInput
                multiline={true}
                numberOfLines={0}
                  style={{ height:'auto',width:'100%',marginTop:15,color:'white', borderColor:'red', borderWidth:0}}
                  underlineColorAndroid="transparent"
                  placeholder="What's happening?"
                  placeholderTextColor="rgb(136, 153, 166)"
            />
          </View>
      </View>
      <View style={{padding:10,width:"100%", alignSelf:"baseline",elevation:8, backgroundColor:"rgb(27, 42, 51)", flexDirection:"row", justifyContent:"space-evenly"}}>
        <FontAwesome name={'photo'} color="rgb(29, 161, 242)" size={22}/>
        <Button
        title="GIF"
        textStyle={{fontSize:12}}
        color="rgb(29, 161, 242)"
        buttonStyle={{backgroundColor:"rgb(27, 42, 51)", color:"rgb(29, 161, 242)", borderWidth:1.5, borderColor:"rgb(29, 161, 242)", padding:2, borderRadius:3}}
        />
        <MaterialCommunityIcons name={'poll'} color="rgb(29, 161, 242)" size={21}/>
        <SimpleLineIcons name={'location-pin'} color="rgb(29, 161, 242)" size={21}/>
        <Feather name={'circle'} color="gray" size={21}/>
        <MaterialCommunityIcons name={'plus-circle'} color="rgb(29, 161, 242)" style={{borderLeftColor:"black", borderLeftWidth:0.8, paddingLeft:15}} size={22}/>
      </View>
  
  </View>
  )
}

const CustomTabComponent = ({navigation, router}) => {
  
  const {routes, index} = navigation.state;
  return (
    <View style={{backgroundColor:'rgb(27, 42, 51)', elevation:8}}>
    
      <View style={{padding:5, height:40}}>

        <TouchableOpacity style={styles.avatar}>
          <Image
          onPress={() => navigation.navigate('DrawerToggle')}
          source={require('./assets/images/avatar.png')}
          style={{width:35,height:35, borderRadius:50,marginTop:5,marginLeft:25}}
          />
        </TouchableOpacity>
        
        <View style={{position:'absolute', left:'22%', width:'80%', top:15}}>
          {
          index == 1 ? 
            <View>               
              <TextInput
                style={{borderWidth:1,backgroundColor:"rgb(20, 29, 38)",borderColor:'rgb(20, 29, 38)', height:35,width:200,marginLeft:15,borderRadius:20,paddingLeft:30,paddingTop:9,color:'white', marginTop:-5}}
                underlineColorAndroid="transparent"
                placeholder="Search Twitter"
                placeholderTextColor="rgb(136, 153, 166)"
              />
              <Ionicons style={{position:'absolute',right:15, top:0}} name='md-person-add' size={25} color='rgb(29, 161, 242)' />
            </View>
          :
            <Text style={{color:'white', fontWeight:"bold", fontSize:18}}>{index == 0 ? 'Home' : index == 1 ? 'Search' : index == 2 ? 'Notifications' : index == 3 ? 'Messages' : ''}</Text>
          }
        </View>      
      </View>
      <View style={{height:60}}>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{position:'absolute', top:15,left:0, width:'25%', alignItems:'center', borderBottomWidth:3,borderBottomColor: index == 0 ? 'rgb(29, 161, 242)' : 'rgb(27, 42, 51)', height:45}}>
      
          <Octicons name={'home'} size={30} color={ index == 0 ? 'rgb(29, 161, 242)':'rgb(136, 153, 166)'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{position:'absolute', top:15,left:'25%', width:'25%', alignItems:'center', borderBottomWidth:3,borderBottomColor: index == 1 ? 'rgb(29, 161, 242)' : 'rgb(27, 42, 51)', height:45}}>
          <EvilIcons name={'search'} size={35} color={ index == 1 ?  'rgb(29, 161, 242)':'rgb(136, 153, 166)'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={{position:'absolute', top:15,left:'50%', width:'25%', alignItems:'center', borderBottomWidth:3,borderBottomColor: index == 2 ? 'rgb(29, 161, 242)' : 'rgb(27, 42, 51)', height:45}}>
        <Ionicons
          name={navigation.state == 'Notification' ? 'ios-notifications-outline' : 'ios-notifications-outline'}
          size={30}
          style={{ color: index == 2 ?  'rgb(29, 161, 242)':'rgb(136, 153, 166)' }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DM')} style={{position:'absolute', top:15,left:'75%', width:'25%', alignItems:'center', borderBottomWidth:3,borderBottomColor: index == 3 ? 'rgb(29, 161, 242)' : 'rgb(27, 42, 51)', height:45}}>
        <FontAwesome
          name={'envelope-o'}
          size={26}
          style={{ color: index == 3 ? 'rgb(29, 161, 242)':'rgb(136, 153, 166)' }}
        />
      </TouchableOpacity>
      </View>    
    </View>
  )
}

const Tabs =  createTabNavigator({
  Home: {
    screen: Home, 

  },
  Search: {
    screen: App,
    navigationOptions: {
      tabBarLabel: 'App',
    }
  },
  Notification: {
    screen: App,
    navigationOptions: {
      tabBarLabel: 'Notification',
    }
  },
  DM: {
    screen: App,
    navigationOptions: {
      tabBarLabel: 'DM',
    }
  },
  
}, {
  tabBarPosition: 'top',
  tabBarComponent: (props) => <CustomTabComponent {...props}/>,
  animationEnabled: true,
  tabBarOptions: {
    showIcon: true,
    showLabel:false,
    titleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    style: {
        borderWidth: 0,
        position:'absolute',
        top:60,
        left:0,
        width:'100%',
        backgroundColor: 'rgb(27, 42, 51)',
        borderColor: 'rgb(27, 42, 51)',
        shadowColor:'red',
        elevation:0.1
    },
    activeBackgroundColor: 'rgb(0, 79, 114)',
    inactiveBackgroundColor: 'rgb(27, 42, 51)',
    labelStyle: {
        fontSize: 14,
        color: '#fff',
        position: 'relative',
        alignSelf: 'center',

    },
    iconStyle:{
      marginBottom:5,
      marginTop:5
    },
    tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    indicatorStyle: {
      backgroundColor: 'rgb(29, 161, 242)',
  },
},
});

const TabsWithThreadStack = StackNavigator({

  Home: {
    screen: Tabs,
    navigationOptions: ({navigation}) =>( {
      title:  'Home', 
      header:null
    })
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      header:null
    }
  },
  Thread: {
    screen: ({navigation}) => <BoldTweet navigation={navigation}/>,
    navigationOptions: ({navigation}) =>( {
      title:  'Thread', 
      headerTitleStyle :{textAlign: 'center',  maxWidth:150, borderWidth: 0, borderColor: 'white', color:"white"},        
      headerStyle:{
        backgroundColor: "rgb(27, 42, 51)",
      },  
      headerTintColor: "white" ,
    })
  },

})

class HomeTabsWithTweetButtonWrapper extends Component{

  render(){
    return (

      <View style={{flex:1}}>
        <TabsWithThreadStack/>
        { (this.props.navigation.state.routeName == "Thread") ? true : <TouchableOpacity
          style={{
          elevation: 4,
          backgroundColor: 'rgb(29, 161, 242)',
          borderRadius: 50,
          padding: 30,
          margin: 15,
          position: "absolute",
          bottom: 45,
          right: 0,
          borderRadius: 50,
          
        }}
          onPress={() => this.props.navigation.navigate('Tweet')}>
          <Octicons
            name={'plus-small'}
            size={26}
            style={{
            position: 'absolute',
            left: 14,
            color: 'white',
            top: 15
          }}/>
          <MaterialCommunityIcons
            name={'feather'}
            size={26}
            style={{
            color: 'white',
            position: 'absolute',
            left: 23,
            top: 17
          }}/>
        </TouchableOpacity>}
      </View>
      
    )
  }
}

const HomeWithCreateTweetScreenStack = createStackNavigator({

  Home:{
    screen: ({navigation}) => <HomeTabsWithTweetButtonWrapper navigation={navigation}/>,
    navigationOptions: ({navigation}) =>( {  
      header:null 
    })
  },
  Tweet: {
    screen: CreateTweetScreen,
    navigationOptions: ({navigation}) =>( {
      headerTitleStyle :{textAlign: 'center',  maxWidth:150, borderWidth: 0, borderColor: 'white', color:"white"},        
      headerStyle:{
        backgroundColor: "rgb(27, 42, 51)",
      },
      headerLeft: () => (
            <Button
            icon={{name: 'clear', type: 'material', style: {color:"rgb(29, 161, 242)", size:30} }}
            buttonStyle={{backgroundColor:'transparent', }}
            onPress={() => navigation.dispatch(NavigationActions.back())}
            />
      ),

        headerRight:  (
          <View style={{width:200}}>
            <Text style={{position:'absolute', fontSize:16, left:55,top:-10, color:"rgb(29, 161, 242)", fontWeight:'bold'}}>Drafts</Text>
            <Button
            buttonStyle={{backgroundColor:"rgb(29, 161, 242)", color:'white', borderRadius:30, padding:10, paddingTop:6,paddingBottom:6,position:'absolute', right:10,top:-17 }}
            onPress={() => navigation.dispatch(NavigationActions.back())}
            textStyle={{color:'white', fontSize:16,fontWeight:'bold'}}
            title="Tweet"
            />
          </View>
        ),  
      headerTintColor: "white" ,
    })
  },

})
const Site = createStackNavigator({
  Site:{
    screen: ({navigation}) => <WebView source={{uri:"https://gbengaoni.com"}} style={{flex:1}}/>,
    navigationOptions: ({navigation}) =>( {  
      title:"Site"
    }),
    headerLeft: () => (
      <Button
      icon={{name: 'clear', type: 'material', style: {color:"rgb(29, 161, 242)", size:30} }}
      buttonStyle={{backgroundColor:'transparent', }}
      onPress={() => navigation.dispatch(NavigationActions.back())}
      />
),
  },

})
class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "No movement",
      bottom: 0,
      response: "",
      pan: new Animated.ValueXY()
    };
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        });
        this.state.pan.setValue({ x: 0, y: 0 });
        this.setState({ text: "Oti ya o!" });

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove:
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        Animated.event([null, { dx: this.state.pan.x, dy: this.state.pan.y }]),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        // Flatten the offset to avoid erratic behavior
        this.state.pan.flattenOffset();
        this.setState({ text: "No gestures ", bottom: 0 });
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    });
  }

  render() {
    // Destructure the value of pan from the state
    let { pan } = this.state;

    // Calculate the x and y transform from the pan value
    let [translateX, translateY] = [pan.x, pan.y];

    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = { transform: [{ translateX }, { translateY }] };

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={[
            {
              flex: 1,
              borderColor: "red",
              borderWidth: 2,
              height: 300,
              width: "100%",
              position: "absolute",
              bottom: this.state.bottom
            },
            imageStyle
          ]}
          {...this._panResponder.panHandlers}
        >
          <Text>{this.state.text}</Text>
          <Text>{this.state.response}</Text>
        </Animated.View>
      </View>
    );
  }
}
const  AppStack = createDrawerNavigator(
  { 
    Home: HomeWithCreateTweetScreenStack,
    Profile: ProfileStack,
    Site: Site,
    AnimationPage: ExampleComponent,
  },
  {
    contentComponent: ({navigation}) => <DrawerContainer  navigation={navigation}/>
  }
);
const AppNavigator = SwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
export default class MainApp extends React.Component{

  constructor(){
    super()
    this.state = {
      orientation: null,
      notify: false,
      message: 'Hello, Awayhu ?'
    }
  }

  componentWillMount(){
    //const orientation = Orientation.getInitialOrientation()
    //this.setState({orientation})
  }
  componentDidMount(){
    //Orientation.addOrientationListener(this.onOrientationChange)
  }
  componentWillUnmount(){
    //Orientation.removeOrientationListener(this.onOrientationChange)
  }
  onOrientationChange = orientation => {
    //this.setState({orientation})
    //AlertAndroid.alert(orientation)
  }
  onToggleNotification = () => {
    
    this.setState({
      notify: !this.state.notify
    })

  }

  render(){
    const {message} = this.props;
    const notify = this.state.notify ?
    <Notification
      autohide
      message={message}
      onClose={this.onToggleNotification}
      />
    : null

    return (
      <View style={{flex:1}}>
      <AppNavigator toggleNotification={this.onToggleNotification}/>
      {notify}
      </View>
    )
  }
}

const {width, height} = Dimensions.get('window')
const cloudImage = require('./assets/images/avatar.png');
const imageWidth = 80

class SimpleAnimations extends React.Component{
  constructor(){
    super()

  }

  componentWillMount(){
    this.animatedValue = new Animated.Value();

  }
  componentDidMount(){
    this.startAnimation()
  }
  startAnimation(){
    this.animatedValue.setValue(width); // resetting the initial value every time we call this method
    Animated.timing(
      this.animatedValue,
      {
        toValue: -imageWidth,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(()=> this.startAnimation()); // we created a loop: when image reaches the end, the animation starts again

  }
  render(){

    return(
      <Animated.Image
        style={ {left: this.animatedValue, position:"absolute",top:height/3,width:imageWidth, height:imageWidth}}
        source={cloudImage}
      />
    )

  }

}


//YellowBox.ignoreWarnings(['Warning: Method `jumpToIndex` is deprecated', 'Module RCTImageLoader'])
console.disableYellowBox = true;
AppRegistry.registerComponent('Twitter', () => MainApp);
