import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid
} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
export default class Tweet extends React.Component {

  constructor() {
    super()
    this.state = {
      touched: false,
      tweet:"Everyone iss talking about what might have been wrong in Kate Spade’s life. Depression doesn’t work like that. There doesn’t have to be anything wrong to feel like everything is wrong.",
      retweets:Math.floor((Math.random() * 100) + 1),
      likes:Math.floor((Math.random() * 10) + 1),
      name:"Maverick 😎 ",
      handle:"@Gbxnga",
      time:"1h",
      retweeted:false,
      liked:false,
      retweetedBy:["Sandra", "Hannit","Michael", "Jason", "Queen"][Math.floor(Math.random()*["Sandra", "Hannit","Michael", "Jason", "Queen"].length)]
    }
    this.tweetPressed = this
      .tweetPressed
      .bind(this)

    this.retweet = this.retweet.bind(this)
    this.like = this.like.bind(this)
  }

  tweetPressed(pressed = false) {
    //ToastAndroid.show('Tweet Saved', ToastAndroid.SHORT);
    this.setState({touched: pressed})
    
    //if (!pressed) 
  }

  retweet(){

    const {retweeted, retweets} = this.state
  

    if (retweeted) 
      this.setState({retweeted: false, retweets: retweets-1})
    

    else this.setState({retweeted: true, retweets: retweets+1})
  }
  like(){
    const {liked, likes} = this.state
  

    if (liked) 
      this.setState({liked: false, likes: likes-1})
    

    else this.setState({liked: true, likes: likes+1})
  }

  render() {

    const {navigation, thekey} = this.props
    const {touched, tweet, retweets, likes, name, handle, time, retweetedBy, retweeted, liked} = this.state

    return (
      <TouchableHighlight onPress={()=>navigation.navigate('Thread')} onPressIn={() => this.tweetPressed(true)} onPressOut={() => this.tweetPressed()}>
        <View
          key={thekey}
          style={[
          styles.tweetContainer, {
            backgroundColor: (touched)
              ? "rgba(20, 29, 38, 0.7)"
              : "rgb(27, 40, 54)"
          }
        ]}>

          <View style={styles.info}>
            <View style={styles.infoIcon}>
              <EvilIcons name={'retweet'} size={25} color={'rgb(136, 153, 166)'}/>
            </View>
            <Text style={styles.infoText}>{retweetedBy} Retweeted</Text>
          </View>
          <TouchableOpacity
            style={styles.avatar}
            onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginTop: 15
            }}/>
          </TouchableOpacity>
          <View style={styles.tweetOwnerInfo}>

            <Text style={styles.tweetOwnerName}>{name}
              <Text style={{
                color: 'rgb(136, 153, 166)'
              }}>{handle} · {time}</Text>
            </Text>

          </View>
          <View style={styles.tweet}>
            <Text style={styles.tweetText}>
              {tweet}
            </Text>
          </View>
          <View style={styles.tweetActions}>

            <TouchableOpacity style={styles.reply}>
              <EvilIcons name={'comment'} size={25} color={'rgb(136, 153, 166)'}/>
              <Text
                style={{
                position: 'absolute',
                left: 27,
                color: 'rgb(136, 153, 166)'
              }}>20</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.retweet()} style={styles.retweet}>
              <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/>
              <Text
                style={{
                position: 'absolute',
                left: 27,
                color: (retweeted) ? "rgb(23, 191, 99)": 'rgb(136, 153, 166)',
                fontWeight:retweeted ? "bold":"300"
              }}>{retweets}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.like()} style={styles.like}>
              { liked ? 
              <Entypo name={'heart'} size={18} style={{marginLeft:4}} color={liked ? "rgb(224, 36, 94)" : 'rgb(136, 153, 166)'}/>
              :
              <EvilIcons name={'heart'} size={25} color={liked ? "rgb(224, 36, 94)" : 'rgb(136, 153, 166)'}/>
              
              }
              <Text
                style={{
                position: 'absolute',
                left: 27,
                color: liked ? "rgb(224, 36, 94)" : 'rgb(136, 153, 166)',
                fontWeight:liked ? "bold":"300"
              }}>{likes}</Text>
            </TouchableOpacity>

          </View>

        </View>
      </TouchableHighlight>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems:'center',
    backgroundColor: 'rgb(27, 40, 54)'
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: 'rgb(255, 255, 255)'
  },
  info: {
    height: 30,
    borderWidth: 0,
    borderColor: 'red',
    marginBottom: 15

  },
  tweetContainer: {
    padding: 15,
    paddingTop: 10,
    //borderTopWidth:1,
    borderBottomWidth: 0.6,
    borderColor: 'black',
    height: 180

  },
  infoText: {
    borderWidth: 0,
    borderColor: 'red',
    color: 'rgb(136, 153, 166)',
    fontSize: 14,
    width: '80%',
    position: 'absolute',
    right: 0
  },
  infoIcon: {
    borderWidth: 0,
    borderColor: 'red',

    width: '15%',
    position: 'absolute',
    left: 0,
    alignItems: 'flex-end'
  },
  avatar: {
    position: 'absolute',
    left: 5,
    alignItems: 'flex-end',
    width: '15%',
    top: 30

  },
  tweetOwnerInfo: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: 88,
    //alignItems:'flex-end',
    width: '75%',
    top: 30,
    //paddingTop:15, paddingBottom:15, paddingRight:15,
    height: 25,
    marginTop: 10

  },
  tweetOwnerName: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: 0,
    //alignItems:'flex-end',
    width: '85%',
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)'

  },
  tweetOwnerHandle: {
    borderWidth: 0,
    borderColor: 'red',
    //position:'absolute',
    left: '80%',
    //alignItems:'flex-end',
    width: '20%',
    color: 'rgb(136, 153, 166)'

  },
  tweetTime: {},
  tweetDropDown: {},

  tweet: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    right: 0,
    //alignItems:'flex-end',
    width: '85%',
    top: 60,
    paddingTop: 5,
    paddingBottom: 15,
    paddingRight: 15,
    height: 'auto'

  },
  tweetText: {
    fontSize: 14,
    textAlign: 'left',
    //margin: 10,
    color: 'rgb(255, 255, 255)',
    height: 'auto'

  },
  tweetActions: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: 88,
    //alignItems:'flex-end',
    width: '75%',
    top: 135,
    //paddingTop:15, paddingBottom:15, paddingRight:15,
    height: 25,
    marginTop: 5

  },
  reply: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: 0,
    //alignItems:'flex-end',
    width: '30%',
    top: 5,
    //paddingTop:15, paddingBottom:15, paddingRight:15,
    height: 25,
    //marginTop:10

  },
  retweet: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: '30%',
    //alignItems:'center',
    width: '30%',
    top: 5,
    //paddingTop:15, paddingBottom:15, paddingRight:15,
    height: 25,
    //marginTop:10

  },
  like: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: '60%',
    //alignItems:'center',
    width: '30%',
    top: 5,
    //paddingTop:15, paddingBottom:15, paddingRight:15,
    height: 25,
    //marginTop:10

  }
})
