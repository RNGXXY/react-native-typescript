import React, { Component } from 'react'
import { View , Image } from 'react-native'
import { inject , observer } from 'mobx-react'
// 轮播图
import Swiper from 'react-native-swiper';
// 公用组件
import {Title} from '../../../../components/common'
// 样式组件
import styles from './style'

interface Props{
    data?:any,
    store?:any
}

interface State{
    list:Array<any>,
    name:String
}

@inject('store')
@observer
export default class HomeFooter extends Component<Props,State> {
    constructor(props:any){
        super(props)
        this.state={
            list:this.props.store.watchList.watchActiveList.list,
            name:this.props.store.watchList.watchActiveList.name
        }
    }

    renderItems( list:Array<any> ){
        return(
            <Swiper showsPagination={false}>
                {
                    list.map((item,index)=>(
                        <View key={index} style={{flex:1}}>
                            <Image style={{width:'100%',height:'100%'}} source={{uri:`http://movie.miguvideo.com/publish${item.imgSrc}`}}/>
                        </View>
                    ))
                }
               
            </Swiper>
        )
    }
    render(){
        let { list } = this.state
        if( list.length === 0 ) return false
        return(
            <View style={styles.homeFooterWrapper}>
                <Title content={this.state.name} />
                <View style={{flex:1}}>
                    {this.renderItems(list)}
                </View>
            </View>
        )
    }
}