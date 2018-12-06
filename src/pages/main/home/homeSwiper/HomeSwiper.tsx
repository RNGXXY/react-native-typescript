import React, { Component } from 'react';

import { View ,  Image} from 'react-native'
import Swiper from 'react-native-swiper';
import { inject , observer } from 'mobx-react'


import styles from './style'


interface Props{
    store?:any
    // data?:any
}

interface State{
    list:Array<any>
}

@inject('store')
@observer
export default class HomeSwiper extends Component<Props,State>{
    constructor(props:any){
        super(props)
        this.state={
            list:[]
        }
    }
  
    componentDidMount(){   
        this.setState({   
            list:this.props.store.watchList.watchSwiperList.list
        })
    }

    renderItems(list:Array<any>){
        if(list.length === 0) return false
        return (
            <Swiper
                autoplay={true}
            >
               {
                    list.map((item,index)=>( 
                    <View key={index} style={styles.slide}>
                        <Image style={{width:'100%',height:'100%'}} source={{uri:`http://movie.miguvideo.com/publish/i_www${item.imgSrc}`}}/>
                    </View>
                    ))
                }
            </Swiper> 
        )
    }

    render(){
        let {list} = this.state
        if(list.length === 0) return false
        return(
            <View style = {styles.wrapper}>
                { this.renderItems(list)}
            </View>
        )
    }
}

