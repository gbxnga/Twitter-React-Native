import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import ProfileScreenTab from "./tab";

//import { MaterialIcons as Icon } from '@expo/vector-icons'; // 6.3.1
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button, Card } from "react-native-elements";
import { StackNavigator, NavigationActions } from "react-navigation";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const userImage = {
  uri:
    "https://pbs.twimg.com/profile_images/951903664809050114/Grfd40ih_400x400.jpg"
};
const userBannerImage = {
  uri: "https://pbs.twimg.com/profile_banners/320086859/1518817459/1500x500"
};

const IMG_SRC = {
  uri: "https://pbs.twimg.com/profile_banners/320086859/1518817459/1500x500"
};
const IMG_HEIGHT = 100;
const NAVBAR_HEIGHT = 64;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    const yOffset = new Animated.Value(0);
    this.state = {
      shouldScroll: true
    };

    const translateY = yOffset.interpolate({
      inputRange: [-2, 0, IMG_HEIGHT - NAVBAR_HEIGHT, IMG_HEIGHT],
      outputRange: [-1, 0, 0, NAVBAR_HEIGHT]
    });

    const scale = yOffset.interpolate({
      inputRange: [-IMG_HEIGHT, 0, 1],
      outputRange: [2, 1, 1]
    });

    this.animatedHeaderStyles = { transform: [{ translateY }, { scale }] };
    this.onScrollHandlerrr = function(event) {
      console.log("Hellooooo");
      console.log(event.nativeEvent.contentOffset.y);
      if (event.nativeEvent.contentOffset.y > 330) {
        this.setState({ shouldScroll: false });
        /*setTimeout(()=> {
                this.setState({shouldScroll:true})
            }, 3000)*/
      } else if (event.nativeEvent.contentOffset.y < 330) {
        this.setState({ shouldScroll: true });
      }

      //this.onScrollHandler()
    }.bind(this);
    this.onScrollHandlerr = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    //console.log(event.nativeEvent.contentOffset.y);
    Animated.event([{ nativeEvent: { contentOffset: { y: this.yOffset } } }], {
      useNativeDriver: true
    });
  }

  componentDidMount() {
    console.log("hi");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Animated.ScrollView
          scrollEnabled={this.state.shouldScroll}
          //onScrollEndDrag={()=> this.setState({shouldScroll:false})}
          style={styles.content}
          onScroll={this.onScrollHandlerrr}
          scrollEventThrottle={1}
        >
          <View style={styles.placeholder} />

          <View
            style={{
              flex: 0.75,
              borderColor: "blue",
              flexDirection: "column",
              borderWidth: 0
            }}
          >
            <View
              style={{
                borderColor: "red",
                flexDirection: "row",
                borderWidth: 0,
                justifyContent: "space-between",
                padding: 10,
                paddingLeft: 15,
                paddingRight: 15
              }}
            >
              <Image
                onPress={() => this.props.navigation.navigate("DrawerClose")}
                source={userImage}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 55,
                  zIndex: 1000000000000,
                  borderWidth: 0,
                  borderColor: "black",
                  resizeMode: "cover"
                }}
              />
              <Button
                buttonStyle={{
                  backgroundColor: "transparent",
                  borderColor: "rgb(29, 161, 242)",
                  borderWidth: 1,
                  borderRadius: 25,
                  padding: 6,
                  width: 100
                }}
                onPress={() => navigation.dispatch(NavigationActions.back())}
                title="Edit Profile"
                textStyle={{
                  color: "rgb(136, 153, 166)",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  fontSize: 14
                }}
              />
            </View>
            <View
              style={{
                borderColor: "red",
                flexDirection: "column",
                borderWidth: 0,
                justifyContent: "space-between",
                paddingLeft: 15
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                Maverick 😎
              </Text>
              <Text
                style={{
                  color: "rgb(136, 153, 166)",
                  fontWeight: "bold",
                  fontSize: 14
                }}
              >
                @Gbenga
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 5,
                paddingLeft: 15
              }}
            >
              <Text
                style={{
                  color: "white"
                }}
              >
                Software Architect | CTO @betagrade & 360NEEDS GROUP Software
                Architect | CTO @betagrade & 360NEEDS GROUP
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                padding: 5,
                paddingLeft: 15
              }}
            >
              <SimpleLineIcons
                name={"location-pin"}
                size={14}
                color={"rgb(136, 153, 166)"}
              >
                <Text
                  style={{
                    color: "rgb(29, 161, 242)",
                    fontSize: 14,
                    marginLeft: 15
                  }}
                >
                  {" "}
                  Lagos, Nigeria
                </Text>
              </SimpleLineIcons>
              <Ionicons
                name={"ios-link-outline"}
                size={18}
                style={{ marginLeft: 15 }}
                color={"rgb(136, 153, 166)"}
              >
                <Text
                  style={{
                    color: "rgb(29, 161, 242)",
                    fontSize: 14,
                    marginLeft: 15
                  }}
                >
                  {" "}
                  medium.com/@gbenga
                </Text>
              </Ionicons>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                padding: 5,
                paddingLeft: 15
              }}
            >
              <MaterialCommunityIcons
                name={"airballoon"}
                size={14}
                color={"rgb(136, 153, 166)"}
              />
              <Text
                style={{
                  color: "rgb(136, 153, 166)",
                  fontSize: 14,
                  marginLeft: 10
                }}
              >
                Born on June 21
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                padding: 5,
                paddingLeft: 15
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginRight: 15
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>970</Text>
                <Text
                  style={{
                    color: "rgb(136, 153, 166)",
                    fontWeight: "300",
                    marginLeft: 5
                  }}
                >
                  Following
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  1,325{" "}
                </Text>
                <Text
                  style={{
                    color: "rgb(136, 153, 166)",
                    fontWeight: "300",
                    marginLeft: 0
                  }}
                >
                  Followers
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: SCREEN_HEIGHT,
              flexDirection: "column",
              borderColor: "green",
              borderWidth: 0
            }}
            ref={r => (this._myComponent = r)}
          >
            <ProfileScreenTab
              shouldScrolls={() => this.setState({ shouldScroll: true })}
              screenProps={{
                shouldScroll: () => this.setState({ shouldScroll: true })
              }}
            />
          </View>
          <Animated.Image
            style={[styles.header, this.animatedHeaderStyles]}
            source={IMG_SRC}
          />
        </Animated.ScrollView>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={30}
          color="white"
          style={styles.backButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(27, 40, 54)'
  },
  placeholder: {
    height: IMG_HEIGHT,
  },
  content: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
  },
  header: {
    position: 'absolute',
    top: -20,
    right: -10,
    left: -10,
    height: IMG_HEIGHT,
  },
  backButton: {
    position: 'absolute',
    top: 5,
    left: 10,
    backgroundColor: 'transparent',
  },
  settingsButton: {
    position: 'absolute',
    right: 10,
    top: IMG_HEIGHT,
  },
});

const IPSUM = `
Gochujang blue bottle tbh chambray, coloring book beard schlitz raclette. Post-ironic slow-carb neutra ugh everyday carry. Deep v pinterest lo-fi, synth distillery unicorn plaid normcore sartorial schlitz copper mug. You probably haven't heard of them VHS austin lo-fi meggings, offal banjo flannel. Meditation fixie tumblr, occupy knausgaard tousled migas semiotics vape bespoke artisan drinking vinegar DIY. Neutra wolf slow-carb helvetica hell of. Enamel pin twee small batch authentic, offal pour-over distillery health goth echo park poutine bitters la croix.

Prism microdosing semiotics, fingerstache kickstarter iPhone skateboard echo park pop-up irony tote bag vexillologist. DIY chambray pickled, neutra actually keytar kickstarter try-hard beard sriracha. Chicharrones keffiyeh man braid squid tumeric. Letterpress keytar cliche offal pop-up, activated charcoal retro portland. Subway tile chartreuse neutra, beard paleo gluten-free photo booth snackwave small batch health goth seitan organic fanny pack. Tilde glossier heirloom, unicorn succulents deep v blog. Hammock bushwick locavore fixie fashion axe iceland, sartorial meh wayfarers glossier authentic street art butcher kickstarter la croix.

Franzen iceland cronut, direct trade PBR&B photo booth master cleanse DIY 90's actually literally. PBR&B viral health goth, franzen kale chips DIY hell of. Trust fund meggings asymmetrical shabby chic raclette gluten-free lo-fi, gastropub next level cold-pressed aesthetic chia swag. Four dollar toast 90's godard, kombucha man braid beard gluten-free mlkshk williamsburg seitan wayfarers. Synth scenester slow-carb, bicycle rights pitchfork yr seitan craft beer literally irony 8-bit. Woke normcore food truck tofu, tousled offal kogi messenger bag meh typewriter chillwave hoodie migas pitchfork. Squid jianbing cold-pressed helvetica, roof party kitsch gastropub kickstarter tofu seitan gochujang hashtag mixtape ramps.
`;

export default ProfileScreen;