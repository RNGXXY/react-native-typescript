import React, { Component } from 'react';
import { View , Text , Image , ScrollView , TouchableOpacity} from 'react-native'
import { inject , observer } from 'mobx-react'
// 公用组件
import {Title} from '../../../../components/common'
// 样式组件
import styles from './style'


interface Props{
    store?:any,
    data?:any
}

interface State{
    list:Array<any>,
    name:String
}

@inject('store')
@observer
export default class HomeBody extends Component<Props,State>{

    constructor(props:any){
        super(props)
        this.state={
            list:[],
            name:''
        }
    }

    renderItems(list:Array<any>){
        return list.map(item=>(
            <TouchableOpacity  
                key={item.SRC_CONT_ID} 
                style={styles.homeBodyItem}
                // 点击跳转路由，只有路由组件身上才有navigation，navigation本来要通过组件传参传进来，所以放在mobx中了
                onPress = {() => {
                    this.props.store.Navigation.navigation.navigate('Detail', {
                        id: item.SRC_CONT_ID,name:item.name 
                    })
                }} 
            >
                <Image 
                    style={styles.homeBodyItemImage}
                    source={{uri:`http://movie.miguvideo.com/publish/i_www${item.imgSrc}`}}/>
                <View style={styles.homeBodyItemDesc}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.homeBodyItemName}>
                        {item.name}
                    </Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.homeBodyItemInfo} >
                        {item.LONG_NAME}
                    </Text>
                </View>
            </TouchableOpacity> 
        ))
    }

    componentDidMount(){   
        this.setState({   
            list:this.props.store.watchList.watchSellList.list,
            name:this.props.store.watchList.watchSellList.name
        })
    }

    render(){
        let {list} = this.state
        if (list.length === 0) return false
        return(
            <View style={styles.homeBodyWrapper}>
                <Title content={this.state.name}/>
                <ScrollView style={styles.homeBodyList} 
                    // 水平滚动
                    horizontal={true}
                    // 忘了
                    bounces={true}
                    // 去掉水平滚动条
                    showsHorizontalScrollIndicator={false}
                >
                    { this.renderItems(list) }

                </ScrollView>
            </View>
        )
    }
}