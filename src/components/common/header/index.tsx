import React, { Component } from 'react'
import { View , StyleSheet , Text , Image} from "react-native";

interface Props{
    content:String
}

class Header extends Component<Props>{
    
    render(){
        return(
            <View style={styles.head}>
                <Image style={styles.inconImage} source={{uri:'../../../../assets/images/search_grey.png'}}/>
                <Text style={styles.title}>{this.props.content}</Text>
                <Image style={styles.inconImage} source={{uri:'../../../../assets/images/mine-active.png'}}/>
            </View>
        )
    }
    
}


const styles = StyleSheet.create({
    head:{ 
        height:45,
        width:'100%',
        backgroundColor:'#fff',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    title:{
        color:'#000',
        paddingLeft:15,
        paddingRight:15,
        flex:1,
        textAlign:'center'
    },
    inconImage:{
        height:25,
        width:25,
        // backgroundColor:'none'
    }
})

export default Header