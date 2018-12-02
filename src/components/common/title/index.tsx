import React, { Component } from 'react';
import { View  , Text,  StyleSheet , ImageBackground} from 'react-native'

interface Props{
    content:String
} 



export default class Title extends Component<Props>{
    render(){
        return(
            <View  style={styles.titleWrapper}>
                <ImageBackground 
                    source={require('../../../../assets/images/module-icon.png')} 
                    resizeMode='contain'
                    style={styles.imageback}>
                </ImageBackground>
                <Text style={styles.content}>{this.props.content}</Text>
            </View>
            
        )
    }
}


const styles = StyleSheet.create({
    titleWrapper:{
        height:45,
        width:'100%',
        backgroundColor:'#fff',
        flexDirection: 'row',
        paddingVertical:10
    },
    imageback:{
        height:'100%',
        width:10,
    },
    content:{
        flex:1,
        justifyContent: 'center',
        color: '#666',
        fontSize:16 
    }
})