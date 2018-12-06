var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
// 公用组件
import { Title } from '../../../../components/common';
// 样式组件
import styles from './style';
let HomeBody = class HomeBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            name: ''
        };
    }
    renderItems(list) {
        return list.map(item => (React.createElement(TouchableOpacity, { key: item.SRC_CONT_ID, style: styles.homeBodyItem, 
            // 点击跳转路由，只有路由组件身上才有navigation，navigation本来要通过组件传参传进来，所以放在mobx中了
            onPress: () => {
                this.props.store.Navigation.navigation.navigate('Detail', {
                    id: item.SRC_CONT_ID, name: item.name
                });
            } },
            React.createElement(Image, { style: styles.homeBodyItemImage, source: { uri: `http://movie.miguvideo.com/publish/i_www${item.imgSrc}` } }),
            React.createElement(View, { style: styles.homeBodyItemDesc },
                React.createElement(Text, { numberOfLines: 1, ellipsizeMode: 'tail', style: styles.homeBodyItemName }, item.name),
                React.createElement(Text, { numberOfLines: 1, ellipsizeMode: 'tail', style: styles.homeBodyItemInfo }, item.LONG_NAME)))));
    }
    componentDidMount() {
        this.setState({
            list: this.props.store.watchList.watchSellList.list,
            name: this.props.store.watchList.watchSellList.name
        });
    }
    render() {
        let { list } = this.state;
        if (list.length === 0)
            return false;
        return (React.createElement(View, { style: styles.homeBodyWrapper },
            React.createElement(Title, { content: this.state.name }),
            React.createElement(ScrollView, { style: styles.homeBodyList, 
                // 水平滚动
                horizontal: true, 
                // 忘了
                bounces: true, 
                // 去掉水平滚动条
                showsHorizontalScrollIndicator: false }, this.renderItems(list))));
    }
};
HomeBody = __decorate([
    inject('store'),
    observer
], HomeBody);
export default HomeBody;
//# sourceMappingURL=HomeBody.js.map