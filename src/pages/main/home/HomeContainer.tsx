import React, { Component } from 'react';
import { View , ScrollView } from 'react-native'

// 自己封装的fetch，要去请求数据
import { Fetch } from '../../../util'

// 样式
import styles from './styles'

// 公用组件
import {Header} from '../../../components/common'
// 子组件
import HoemSwiper from './homeSwiper/HomeSwiper'
import HoemBody from './homeBody/HomeBody'
import HoemFooter from './homeFooter/HomeFooter'


interface Props{ 
    
}

interface State{
    list:Array<any>
}

class HomeContainer extends Component<Props,State>{
    constructor(props:any){
        super(props)
        this.state={
            list:[]
        }
    }

    componentDidMount(){
        Fetch('/migu/lovev/miguMovie/data/seeFilmData.jsp')
            .then((res:any)=>{  
                this.setState({
                    list:res
                })
            })
    }
    render(){
        let {list} = this.state
        if(!list.length) return false
        return(
            <ScrollView 
                // 去掉垂直滚动条 
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.wrapper}>
                    <Header content='咪咕影院'></Header>  
                    <HoemSwiper data={list[0]}/>
                    <HoemBody data={list[1]}/>
                    <HoemFooter data={list[2]}/>
                </View>
            </ScrollView>
        )
    }
} 

export default HomeContainer