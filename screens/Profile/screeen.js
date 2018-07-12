import React from 'react'
import {Image, StyleSheet, View, Text, StatusBar, ScrollView, Animated} from 'react-native'
import {Button, Card} from 'react-native-elements';
import {StackNavigator, NavigationActions} from 'react-navigation'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileScreenTab from './tab'

const userImage = {uri : 'https://pbs.twimg.com/profile_images/951903664809050114/Grfd40ih_400x400.jpg'}
const userBannerImage = {uri : 'https://pbs.twimg.com/profile_banners/320086859/1518817459/1500x500'}


export default ProfileScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
  <StatusBar barStyle="light-content" />
      <Animated.ScrollView style={{borderColor:"red", borderWidth:1}}>

        <View style={{flex:0.6,borderColor:"yellow", borderWidth:0, }}>

          <View style={{flex:0.25,borderColor:"red", borderWidth:0}}>
            <Image style={[StyleSheet.absoluteFill,{resizeMode:"cover"}]} source={userBannerImage}/>
            <Button icon={{ name: 'arrow-back', type: 'material', size:30, style: { color: "white", } }}
                    buttonStyle={{ backgroundColor: 'transparent', position: "absolute", top: -5, left: -10, padding:20, paddingLeft:15 }} onPress={() => navigation.navigate('Home')}/>
            <SimpleLineIcons size={20} name="options-vertical" style={{ color: "white", position: "absolute", top: 20, right: 20 }}/>
          </View>
          <View style={{flex:0.75,borderColor:"blue", flexDirection:"column", borderWidth:0}}>
            <View style={{borderColor:"red", flexDirection:"row", borderWidth:0, justifyContent:"space-between", padding:10, paddingLeft:15, paddingRight:15  }}>
              <Image
                  onPress={() => this.props.navigation.navigate('DrawerClose')}
                  source={userImage}
                  style={{ width: 70, height: 70, borderRadius: 55,zIndex: 1000000000000, borderWidth: 0, borderColor: "black", resizeMode:"cover" }}/>
              <Button
                buttonStyle={{
                backgroundColor: 'transparent',
                borderColor: "rgb(136, 153, 166)",
                borderWidth: 2,
                borderRadius: 25,
                padding: 6,
                width:130
              }}
                onPress={() => navigation.dispatch(NavigationActions.back())}
                title="Edit Profile"
                textStyle={{
                color: "rgb(136, 153, 166)",
                fontWeight: "bold",
                backgroundColor: 'transparent',
                fontSize: 16
              }}/>
              
            </View>
            <View style={{borderColor:"red", flexDirection:"column", borderWidth:0, justifyContent:"space-between", paddingLeft:15  }}>
              <Text style={{color: "white",fontWeight: "bold",fontSize: 18}}>Maverick 😎</Text>
              <Text style={{ color: "rgb(136, 153, 166)", fontWeight: "bold", fontSize: 14 }}>@Gbenga</Text>
            </View>
            <View style={{ flexDirection:"column",  justifyContent:"space-between", padding:5, paddingLeft:15   }}>
              <Text style={{
                  color: "white"
                }}>Software Architect | CTO @betagrade & 360NEEDS GROUP Software Architect | CTO @betagrade & 360NEEDS GROUP</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"flex-start", padding:5, paddingLeft:15  }}>
                    <SimpleLineIcons
                    name={'location-pin'}
                    size={14}
                    color={'rgb(136, 153, 166)'}>
                      <Text style={{color:"rgb(29, 161, 242)", fontSize:14, marginLeft:15}}> Lagos, Nigeria</Text>
                    </SimpleLineIcons>
                    <Ionicons
                    name={'ios-link-outline'}
                    size={18}
                    style={{marginLeft:15}}
                    color={'rgb(136, 153, 166)'}>
                    
                      <Text style={{color:"rgb(29, 161, 242)", fontSize:14, marginLeft:15}}> medium.com/@gbenga</Text>
                    </Ionicons>
            </View>
            <View style={{ flexDirection:"row", justifyContent:"flex-start", padding:5, paddingLeft:15   }}>
                <MaterialCommunityIcons
                name={'airballoon'}
                size={14}
                
                color={'rgb(136, 153, 166)'}/>
                <Text style={{color:"rgb(136, 153, 166)", fontSize:14, marginLeft:10}}>Born on June 21</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"flex-start", padding:5, paddingLeft:15   }}>
                <View style={{ flexDirection:"row", justifyContent:"flex-start", marginRight:15}}>
                  <Text style={{ color: "white",fontWeight: "bold"}}>970</Text>
                  <Text style={{ color: "rgb(136, 153, 166)", fontWeight: "300", marginLeft:5}}>Following</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{color: "white",fontWeight: "bold"}}>1,325  </Text>
                  <Text
                    style={{
                    color: "rgb(136, 153, 166)",
                    fontWeight: "300",
                    marginLeft:0
                  }}>
                    Followers</Text>
                </View>
            </View>
          </View>

        </View>
        <View style={{flex:0.4,borderColor:"green", borderWidth:0}}>
            <ProfileScreenTab/>
        </View>
      </Animated.ScrollView >
      </View>
      

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(27, 40, 54)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});