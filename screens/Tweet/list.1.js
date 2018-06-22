import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import Tweet from './index'
export default TweetsList = ({number = 1, navigation ={}}) => {

    // randomly generated N = [number] length array 0 <= A[N] <= [number - 1]
    let tweets = Array.from({length: number}, () => Math.floor(Math.random() * number));

    return (

        <ScrollView>

            
            { tweets.map( e => <Tweet navigation={navigation} thekey={e}/> ) }
       

        </ScrollView>
    )

}