import React, { Component } from 'react';

import { View , Text } from 'react-native'

export default class DetailContainer extends Component{
    // 配置标题栏,屏幕组件可以具有静态属性navigationOptions，该属性称为对象或返回包含各种配置选项的对象的函数。
    static navigationOptions =(props:any)=> {
        return{
            title: props.navigation.getParam('name'),
            headerStyle: {
            backgroundColor: 'skyblue',
            height:20
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }
    };
    render(){
        return(
            <View>
                <Text>detail</Text>
            </View>
        ) 
    }
}