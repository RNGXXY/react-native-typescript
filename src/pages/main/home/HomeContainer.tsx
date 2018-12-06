import React, { Component } from 'react';
import { View , ScrollView } from 'react-native'
import { inject, observer } from 'mobx-react'

// 样式
import styles from './styles'

// 公用组件
import {Header} from '../../../components/common'
// 子组件
import HoemSwiper from './homeSwiper/HomeSwiper'
import HoemBody from './homeBody/HomeBody'
import HoemFooter from './homeFooter/HomeFooter'

 
interface Props{ 
    store?:any
}

interface State{ 

}

@inject('store')
@observer
class HomeContainer extends Component<Props,State>{

    // 父组件刚开始发送请求数据的方法，将首页的数据全部请求回来保存到mobx中，再由子组件自己去mobx中去拿
    componentDidMount(){
        this.props.store.watchList.getWatchList()
    }  
 
    render(){ 
        let  { watchList } = this.props.store.watchList
        if(watchList.length===0) return false
        return(
            <ScrollView 
                // 去掉垂直滚动条 
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.wrapper}>
                    <Header content='咪咕影院'></Header>  
                    <HoemSwiper/>
                    <HoemBody />
                    <HoemFooter />
                </View>
            </ScrollView>
        )
    }
} 

export default HomeContainer