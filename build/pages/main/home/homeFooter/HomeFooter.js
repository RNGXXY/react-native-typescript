var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { inject, observer } from 'mobx-react';
// 轮播图
import Swiper from 'react-native-swiper';
// 公用组件
import { Title } from '../../../../components/common';
// 样式组件
import styles from './style';
let HomeFooter = class HomeFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.store.watchList.watchActiveList.list,
            name: this.props.store.watchList.watchActiveList.name
        };
    }
    renderItems(list) {
        return (React.createElement(Swiper, { showsPagination: false }, list.map((item, index) => (React.createElement(View, { key: index, style: { flex: 1 } },
            React.createElement(Image, { style: { width: '100%', height: '100%' }, source: { uri: `http://movie.miguvideo.com/publish${item.imgSrc}` } }))))));
    }
    render() {
        let { list } = this.state;
        if (list.length === 0)
            return false;
        return (React.createElement(View, { style: styles.homeFooterWrapper },
            React.createElement(Title, { content: this.state.name }),
            React.createElement(View, { style: { flex: 1 } }, this.renderItems(list))));
    }
};
HomeFooter = __decorate([
    inject('store'),
    observer
], HomeFooter);
export default HomeFooter;
//# sourceMappingURL=HomeFooter.js.map