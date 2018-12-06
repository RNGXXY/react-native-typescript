
import React , { Component } from 'react'
import {
    View , WebView
} from 'react-native'

class FindContainer extends Component {
    render () {
        return ( 
            // 坑，webView没有高度了，解决办法，外面的盒子不要加flex：1，给高度100%即可
           <View style={{height:'100%'}}>
                <WebView
                    style = {{backgroundColor:'#fff',zIndex:99}}
                    source = {{ uri: 'https://www.baidu.com/'}}
                    startInLoadingState={true}  //转圈圈的
                    domStorageEnabled={true}    //开启dom存贮
                    javaScriptEnabled={true}    //开启js
                >
                    
                </WebView>
           </View>
        )
    }
}


export default FindContainer