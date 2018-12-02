import React, { Component } from 'react';
import { View , Text , Image , ScrollView} from 'react-native'

// 公用组件
import {Title} from '../../../../components/common'
// 样式组件
import styles from './style'



interface Props{
    data:any
}

export default class HomeBody extends Component<Props>{


    renderItems(list:Array<any>){
        if (list.length === 0) return false
        return list.map(item=>(
            <View key={item.SRC_CONT_ID} style={styles.homeBodyItem}>
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
            </View>
        ))
    }

    render(){
        let { list } = this.props.data
        
        return(
            <View style={styles.homeBodyWrapper}>
                <Title content={this.props.data.name}/>
                <ScrollView style={styles.homeBodyList} 
                    horizontal={true}
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