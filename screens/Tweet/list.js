import React, {Component} from 'react'
import {ScrollView, ListView, Text, ActivityIndicator, StyleSheet, View} from 'react-native'
import Tweet from './index'
import data from './tweets.json'
export default class TweetsList extends Component  {

    constructor(props){
        super(props)


        this.state = {
            dataSource: [],
            data: false
        }
        this.renderRow = this.renderRow.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        // simulate remote data fetch by delaying render for 5ms
       setTimeout( () => this.setState({dataSource: ds.cloneWithRows(data), data: true}),
       500)

       console.log(this.props.navigation)
    }
    handleScroll(event) {
        //alert('ehykjlhk;lj')

        console.log('child', event.nativeEvent.contentOffset.y);
        if (event.nativeEvent.contentOffset.y == 0){
            console.log('youve reachd top sending conrol to arent')
            this.props.shouldScroll()
        }

       }

    renderRow(record){

        return(
            <Tweet navigation={this.props.navigation} {...record} />
        )

    }

    render() {
        return (

            
            <View>
             
                { this.state.data ? 
                    <ListView
                    
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    /> 
                    :             
                    <View style={[styles.container, styles.horizontal]}>                
                        <ActivityIndicator size="small" color="rgb(29, 161, 242)" />
                    </View> 
                }
        
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })