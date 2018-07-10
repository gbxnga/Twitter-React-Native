import React, {Component} from 'react'

import {View, Text, TextInput,ToastAndroid} from 'react-native'


export default class ReplyComponent extends Component {

    constructor(){
        super()
        this.state ={
            isFocused : false
        }
    }

    render(){

        const {isFocused} = this.state

        return (
            <View style={{padding:5,width:"100%", elevation:8, height:50, backgroundColor:"rgb(27, 42, 51)"}}>
                <View style={{flex:1, marginLeft:2.5, marginRight:2.5}} >        
                    <TextInput
                        multiline={true}
                        numberOfLines={0}
                        //disableFullscreenUI={true}

                        onFocus={()=> this.setState({isFocused:true})}
                        
                        underlineColorAndroid='transparent' // remove automatic android black bottom border
                        style={{height:40,width:'100%',marginTop:0,color:'white', borderBottomColor: isFocused ? 'rgb(29, 161, 242)':'rgb(136, 153, 166)', borderBottomWidth:1}}

                        placeholder="Tweet your reply"
                        placeholderTextColor="rgb(136, 153, 166)"
                        />
                </View>
            </View>
        )
    }
}