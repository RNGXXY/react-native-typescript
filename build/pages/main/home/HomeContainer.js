var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react';
// 样式
import styles from './styles';
// 公用组件
import { Header } from '../../../components/common';
// 子组件
import HoemSwiper from './homeSwiper/HomeSwiper';
import HoemBody from './homeBody/HomeBody';
import HoemFooter from './homeFooter/HomeFooter';
let HomeContainer = class HomeContainer extends Component {
    // 父组件刚开始发送请求数据的方法，将首页的数据全部请求回来保存到mobx中，再由子组件自己去mobx中去拿
    componentDidMount() {
        this.props.store.watchList.getWatchList();
    }
    render() {
        let { watchList } = this.props.store.watchList;
        if (watchList.length === 0)
            return false;
        return (React.createElement(ScrollView
        // 去掉垂直滚动条 
        , { 
            // 去掉垂直滚动条 
            showsVerticalScrollIndicator: false },
            React.createElement(View, { style: styles.wrapper },
                React.createElement(Header, { content: '\u54AA\u5495\u5F71\u9662' }),
                React.createElement(HoemSwiper, null),
                React.createElement(HoemBody, null),
                React.createElement(HoemFooter, null))));
    }
};
HomeContainer = __decorate([
    inject('store'),
    observer
], HomeContainer);
export default HomeContainer;
//# sourceMappingURL=HomeContainer.js.map