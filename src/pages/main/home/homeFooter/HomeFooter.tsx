import React, { Component } from 'react'
import { View , Image } from 'react-native'
// 轮播图
import Swiper from 'react-native-swiper';
// 公用组件
import {Title} from '../../../../components/common'
// 样式组件
import styles from './style'

interface Props{
    data?:any
}
export default class HomeFooter extends Component<Props> {

    renderItems( list:Array<any> ){
        if(list.length === 0) return false 
        return(
            <Swiper showsPagination={false}>
                {
                    list.map((item,index)=>(
                        <View key={index} style={{flex:1}}>
                            <Image style={{width:'100%',height:'100%'}} source={{uri:`http://movie.miguvideo.com/publish${item.imgSrc}`}}/>
                        </View>
                    ))
                }
                {/* <View style={{flex:1}}>
                    <Image style={{width:'100%',height:'100%'}} source={{uri:`http://movie.miguvideo.com/publish/i_www/image/70/517/292.gif`}}/>
                </View> */}
               
            </Swiper>
        )
    }
    render(){
        let { list } = this.props.data
        return(
            <View style={styles.homeFooterWrapper}>
                <Title content='精彩活动'/>
                <View style={{flex:1}}>
                    {this.renderItems(list)}
                    {/* <Swiper showsPagination={false}>
                        <View style={{flex:1}}>
                            <Image style={{width:'100%',height:'100%'}} source={{uri:`http://movie.miguvideo.com/publish/i_www/image/70/517/292.gif`}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{width:'100%',height:'100%'}} source={{uri:`http://movie.miguvideo.com/publish/i_www/image/70/517/292.gif`}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{width:'100%',height:'100%'}} source={{uri:`http://movie.miguvideo.com/publish/i_www/image/70/517/292.gif`}}/>
                        </View>
                    </Swiper> */}
                </View>
            </View>
        )
    }
}