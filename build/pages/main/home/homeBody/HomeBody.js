import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
// 公用组件
import { Title } from '../../../../components/common';
// 样式组件
import styles from './style';
export default class HomeBody extends Component {
    renderItems(list) {
        if (list.length === 0)
            return false;
        return list.map(item => (React.createElement(View, { key: item.SRC_CONT_ID, style: styles.homeBodyItem },
            React.createElement(Image, { style: styles.homeBodyItemImage, source: { uri: `http://movie.miguvideo.com/publish/i_www${item.imgSrc}` } }),
            React.createElement(View, { style: styles.homeBodyItemDesc },
                React.createElement(Text, { numberOfLines: 1, ellipsizeMode: 'tail', style: styles.homeBodyItemName }, item.name),
                React.createElement(Text, { numberOfLines: 1, ellipsizeMode: 'tail', style: styles.homeBodyItemInfo }, item.LONG_NAME)))));
    }
    render() {
        let { list } = this.props.data;
        return (React.createElement(View, { style: styles.homeBodyWrapper },
            React.createElement(Title, { content: this.props.data.name }),
            React.createElement(ScrollView, { style: styles.homeBodyList, horizontal: true, bounces: true, 
                // 去掉水平滚动条
                showsHorizontalScrollIndicator: false }, this.renderItems(list))));
    }
}
//# sourceMappingURL=HomeBody.js.map