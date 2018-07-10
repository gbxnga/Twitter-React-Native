import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  AsyncStorage,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView
} from 'react-native'
import {NavigationActions} from 'react-navigation'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
//import { connect } from 'react-redux';

export default class DrawerContainer extends React.Component {

  _signOutAsync = async() => {
    await AsyncStorage.clear();
    this
      .props
      .navigation
      .navigate('Auth')
  };

  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <View
          style={{
          paddingBottom: 30,
          paddingLeft: 30
        }}>
          <Image
            onPress={() => this.props.navigation.navigate('DrawerToggle')}
            source={require('../assets/images/avatar.png')}
            style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            marginTop: 20
          }}/>
          <Text
            style={{
            marginTop: 15,
            color: "white",
            fontWeight: "bold"
          }}>Maverick 😎
          </Text>
          <Text
            style={{
            marginTop: 15,
            color: "rgb(136, 153, 166)",
            fontWeight: "300"
          }}>@Gbenga
          </Text>

          <View>
            <Text
              style={{
              color: "white",
              position: 'absolute',
              left: 0,
              top: 10,
              fontWeight: "bold"
            }}>970
              <Text
                style={{
                color: "rgb(136, 153, 166)",
                fontWeight: "300"
              }}>Following</Text>
            </Text>
            <Text
              style={{
              color: "white",
              position: 'absolute',
              right: 30,
              top: 10,
              fontWeight: "bold"
            }}>1,325
              <Text
                style={{
                color: "rgb(136, 153, 166)",
                fontWeight: "300"
              }}>Followers</Text>
            </Text>
          </View>

        </View>
        <View
          style={{
          display: 'none',
          width: "100%",
          height: 30,
          backgroundColor: "rgb(230, 69, 0)",
          paddingTop: 5,
          paddingLeft: 35,
          paddingBottom: 5,
          paddingRight: 15
        }}>
          <Text
            style={{
            color: "white",
            position: "absolute",
            left: 30,
            top: 6
          }}>Orders</Text>
          <Text
            style={{
            color: "#FF4C00",
            backgroundColor: "white",
            borderRadius: 10,
            position: "absolute",
            width: 18,
            right: 15,
            top: 6,
            textAlign: "center"
          }}>66</Text>
        </View>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={[
            styles.list, {
              marginTop: 20,
              borderTopWidth: 0.3,
              borderTopColor: 'black',
              height: 60,
              borderTopWidth: 0.3,
              borderTopColor: 'black'
            }
          ]}>
            <View>
              <FontAwesome
                style={{
                position: "absolute",
                left: 20,
                top: 10
              }}
                name='user-o'
                size={20}
                color="rgb(136, 153, 166)"/>
              <Text style={styles.text}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Site')} style={styles.list}>
            <View>
              <Ionicons
                style={{
                position: "absolute",
                left: 20,
                top: 10
              }}
                name='ios-list-box-outline'
                size={20}
                color="rgb(136, 153, 166)"/>
              <Text style={styles.text}>
                Lists
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View>
              <FontAwesome
                style={{
                position: "absolute",
                left: 20,
                top: 10
              }}
                name='bookmark-o'
                size={20}
                color="rgb(136, 153, 166)"/>
              <Text onPress={() => navigation.navigate('AnimationPage')} style={styles.text}>
                Bookmarks
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
            styles.list, {
              borderBottomWidth: 0.3,
              borderBottomColor: 'black'
            }
          ]}>
            <View>
              <Ionicons
                style={{
                position: "absolute",
                left: 20,
                top: 10
              }}
                name='md-analytics'
                size={20}
                color="rgb(136, 153, 166)"/>
              <Text onPress={() => navigation.navigate('Orders')} style={styles.text}>
                Moments
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View>
              <MaterialCommunityIcons
                style={{
                position: "absolute",
                left: 20,
                top: 10
              }}
                name="arrow-top-right"
                size={20}
                color="rgb(136, 153, 166)"/>
              <Text onPress={() => navigation.navigate('Orders')} style={styles.text}>
                Twitter Ads
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View>
              <Text
                onPress={() => navigation.navigate('Orders')}
                style={[
                styles.text, {
                  left: 20
                }
              ]}>
                Settings and privacy
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <View>
              <Text
                onPress={() => navigation.navigate('Orders')}
                style={[
                styles.text, {
                  left: 20
                }
              ]}>
                Help Centre
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(27, 42, 51)',
    paddingTop: 10
  },
  list: {
    padding: 10,
    height: 60,
    borderColor: 'red',
    borderWidth: 0
  },
  text: {
    position: "absolute",
    left: "24%",
    top: 10,
    color: "white",
    fontSize: 16
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    margin: 0,
    borderRadius: 0,
    borderColor: 'white',
    borderWidth: 0,
    textAlign: 'left',
    paddingLeft: 30
  }
})