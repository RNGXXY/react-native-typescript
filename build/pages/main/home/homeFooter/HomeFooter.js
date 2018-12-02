import React, { Component } from 'react';
import { View, Image } from 'react-native';
// 轮播图
import Swiper from 'react-native-swiper';
// 公用组件
import { Title } from '../../../../components/common';
// 样式组件
import styles from './style';
export default class HomeFooter extends Component {
    renderItems(list) {
        if (list.length === 0)
            return false;
        return (React.createElement(Swiper, { showsPagination: false }, list.map((item, index) => (React.createElement(View, { key: index, style: { flex: 1 } },
            React.createElement(Image, { style: { width: '100%', height: '100%' }, source: { uri: `http://movie.miguvideo.com/publish${item.imgSrc}` } }))))));
    }
    render() {
        let { list } = this.props.data;
        return (React.createElement(View, { style: styles.homeFooterWrapper },
            React.createElement(Title, { content: '\u7CBE\u5F69\u6D3B\u52A8' }),
            React.createElement(View, { style: { flex: 1 } }, this.renderItems(list))));
    }
}
//# sourceMappingURL=HomeFooter.js.map