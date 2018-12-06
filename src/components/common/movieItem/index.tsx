import React, { Component } from 'react'
import {View,Text,Image,StyleSheet} from 'react-native' 




interface Props{
    info?:any
}



export default class perShowing extends Component<Props>{

    render(){
        let {info} = this.props
        if (!Object.keys(info).length) return false
        // alert(JSON.stringify(info.director))
        return(
            <View style={styles.itemWrap}>
                <Image style={styles.imgBox} source={{uri:`http://movie.miguvideo.com${info.picAddr}`}}/>
                <View style={styles.content}>
                    <Text style={styles.title}>{info.filmName}</Text>    
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.worker}>导演:{info.director}</Text>    
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.worker}>主演:{info.actor}</Text>    
                </View> 
                <View style={styles.choose}>
                    {
                        (info.isPreSale == 1) ? <Text style={styles.preSell}>预售</Text> : <Text style={styles.wantSee}>想看</Text>
                    }
                    {/* <Text style={styles.preSell}>预售</Text> */}
                    {/* <Text style={styles.wantSee}>想看</Text> */}
                </View>
            </View>
        )
    }
} 



const styles = StyleSheet.create({
    itemWrap:{
        height:127,
        width:'100%',
        padding: 12,
        backgroundColor:'#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgBox:{
        width:66,
        height:'100%'
    },
    content:{
        flex:1 ,
        padding:10,
        height:'100%',
        justifyContent: 'space-between',
    },
    title:{
        flex:1 ,
        color: '#666',
        fontSize: 16
    },
    worker:{
        height:20,
        lineHeight: 20,
        width:'100%',
    },
    choose:{
        width:46,
        height:'100%',
        justifyContent: 'center'
    },
    preSell:{
        height:26,
        justifyContent: 'center',
        textAlign:'center',
        width:'100%',
        color: 'rgb(107,188,203)',
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'rgb(107,188,233)'
    },
    wantSee:{
        height:26,
        justifyContent: 'center',
        textAlign:'center',
        width:'100%',
        color: 'rgb(247, 68, 68)',
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'rgb(247, 68, 68)'
    }

})