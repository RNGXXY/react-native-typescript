import React, { Component } from 'react';
import { View, WebView } from 'react-native';
class FindContainer extends Component {
    render() {
        return (
        // 坑，webView没有高度了，解决办法，外面的盒子不要加flex：1，给高度100%即可
        React.createElement(View, { style: { height: '100%' } },
            React.createElement(WebView, { style: { backgroundColor: '#fff', zIndex: 99 }, source: { uri: 'https://www.baidu.com/' }, startInLoadingState: true, domStorageEnabled: true, javaScriptEnabled: true })));
    }
}
export default FindContainer;
//# sourceMappingURL=FindContainer.js.map