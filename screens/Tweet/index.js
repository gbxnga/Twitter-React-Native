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
import PropTypes from 'prop-types';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import randomWords from 'random-words'


const userImage = {uri : 'https://pbs.twimg.com/profile_images/951903664809050114/Grfd40ih_400x400.jpg'}
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}
String.prototype.capitalizeFirstLetter = function() {
  return `${this.substr(0,1).toUpperCase()}${this.substr(1)}`;
}
export default class Tweet extends React.Component {

  constructor(props) {
    super(props)
    const {tweet, name, handle, time, retweeted, liked, picture} = this.props
    const twit = randomWords({min: 18, max: 40}).join(" ");
    this.state = {
      photo: {uri :  picture.thumbnail},
      touched: false,
      tweet: twit,
      retweets:Math.floor((Math.random() * 100) + 1),
      likes:Math.floor((Math.random() * 10) + 1),
      name: `${name.first.capitalizeFirstLetter()} ${name.last.capitalizeFirstLetter()}`,
      handle: `@${name.first}`,
      time: "1hr",
      retweeted: [true, false].random(),
      liked: [true, false].random(),
      retweetedBy:["Sandra", "Hannit","Michael", "Jason", "Queen"][Math.floor(Math.random()*["Sandra", "Hannit","Michael", "Jason", "Queen"].length)]
    }
    this.tweetPressed = this
      .tweetPressed
      .bind(this)

    this.retweet = this.retweet.bind(this)
    this.like = this.like.bind(this)
  }

  tweetPressed(pressed = false) {
    
    this.setState({touched: pressed})
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

    const {navigation, thekey, isReply} = this.props
    const {touched, tweet, retweets, likes, name, handle, time, retweetedBy, retweeted, liked, photo} = this.state


    return(
      <TouchableHighlight onPress={()=>navigation.navigate('Thread')} onPressIn={() => this.tweetPressed(true)} onPressOut={() => this.tweetPressed()}>
      <View key={thekey} style={{flex:1, borderBottomColor:"black", borderBottomWidth:0.5, flexDirection:"column", backgroundColor:"#1b2836"}}>
          { !isReply ? <View style={{flex:1,borderColor:"green", flexDirection:"row", borderWidth:0,height:20, marginTop:5 }}>
          
            <View style={{flex:0.23, borderColor:"red", borderWidth:0, alignItems:"flex-end"}}>
              <EvilIcons  name={'retweet'} size={25} color={'rgb(136, 153, 166)'}/>
              </View>
              <Text style={{flex:0.5, color:"rgb(136, 153, 166)"}}>{retweetedBy} Retweeted</Text>
          </View>: true}
          <View style={{flex:1,borderColor:"green", flexDirection:"row", borderWidth:0,height:"auto" }}>
          
            <View style={{flex:0.23,borderColor:"yellow", flexDirection:"column", borderWidth:0,}}>
              <View style={{height:100, alignItems:"center"}}>
                <TouchableOpacity
                
                onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={photo}
                  style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginTop: 15
                }}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex:0.77,borderColor:"yellow",flexDirection:"column",borderWidth:0,}}>

              <View style={{flex:1,borderColor:"blue",borderWidth:0,marginBottom:5}}>
                <Text style={{color:"white", fontWeight:"bold"}}>{name}
                  <Text style={{
                    color: 'rgb(136, 153, 166)',
                    marginLeft:5
                  }}>{handle} · {time}</Text>
                </Text>
              </View>
            <View style={{flex:1,borderColor:"blue",borderWidth:0}}>
              <Text style={{color:"white", paddingRight:10}}>{tweet}</Text>

            </View>
            <View style={{flex:1,borderColor:"blue",borderWidth:0,marginTop:5, flexDirection:"row", paddingBottom:5}}>
                <TouchableOpacity style={{paddingLeft:0,flex:0.25, alignItems:"center", flexDirection:"row", borderColor:"red", borderWidth:0}}>
                <EvilIcons name={'comment'} style={{margin:0,marginLeft:-4, borderColor:"red", borderWidth:0}} size={25} color={'rgb(136, 153, 166)'}/>
                <Text
                  style={{
                  position: 'absolute',
                  left: 27,
                  color: 'rgb(136, 153, 166)',
                  marginLeft:-4
                }}>20</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.retweet()}  style={{padding:5,flex:0.25, alignItems:"center", flexDirection:"row", borderColor:"red", borderWidth:0}}>
                <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/>
                <Text
                  style={{
                  position: 'absolute',
                  left: 27,
                  color: (retweeted) ? "rgb(23, 191, 99)": 'rgb(136, 153, 166)',
                  fontWeight:retweeted ? "bold":"300",
                  marginLeft:3,
                }}>{retweets}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.like()}  style={{padding:5,flex:0.25, alignItems:"center", flexDirection:"row", borderColor:"red", borderWidth:0}}>
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
                  fontWeight:liked ? "bold":"300",
                  marginLeft:3,
                }}>{likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{padding:5,flex:0.25,alignItems:"center",flexDirection:"row", borderColor:"red", borderWidth:0}}>
                    <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/>
                
                </TouchableOpacity>
              </View>
            
            </View>
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
    width: '75%',
    top: 30,
    height: 25,
    marginTop: 10

  },
  tweetOwnerName: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: 0,
    width: '85%',
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)'

  },
  tweetOwnerHandle: {
    borderWidth: 0,
    borderColor: 'red',
    left: '80%',
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
    color: 'rgb(255, 255, 255)',
    height: 'auto'

  },
  tweetActions: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: 88,
    width: '75%',
    top: 135,
    height: 25,
    marginTop: 5

  },
  reply: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: 0,
    width: '30%',
    top: 5,
    height: 25,

  },
  retweet: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: '30%',
    width: '30%',
    top: 5,
    height: 25,

  },
  like: {
    borderWidth: 0,
    borderColor: 'red',
    position: 'absolute',
    left: '60%',
    width: '30%',
    top: 5,
    height: 25,

  }
})

Tweet.propTypes = {
  retweeted: PropTypes.string.isRequired
};
Tweet.defaultProps = {
  name: 'Anonymous',
  tweet: 'A tweet',
  retweeted: false,
  liked: false
};

