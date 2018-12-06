import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class DetailContainer extends Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, null, "detail")));
    }
}
// 配置标题栏,屏幕组件可以具有静态属性navigationOptions，该属性称为对象或返回包含各种配置选项的对象的函数。
DetailContainer.navigationOptions = (props) => {
    return {
        title: props.navigation.getParam('name'),
        headerStyle: {
            backgroundColor: 'skyblue',
            height: 20
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
};
//# sourceMappingURL=DetailContainer.js.map