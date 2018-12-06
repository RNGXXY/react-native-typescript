var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { inject, observer } from 'mobx-react';
import styles from './style';
let HomeSwiper = class HomeSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        this.setState({
            list: this.props.store.watchList.watchSwiperList.list
        });
    }
    renderItems(list) {
        if (list.length === 0)
            return false;
        return (React.createElement(Swiper, { autoplay: true }, list.map((item, index) => (React.createElement(View, { key: index, style: styles.slide },
            React.createElement(Image, { style: { width: '100%', height: '100%' }, source: { uri: `http://movie.miguvideo.com/publish/i_www${item.imgSrc}` } }))))));
    }
    render() {
        let { list } = this.state;
        if (list.length === 0)
            return false;
        return (React.createElement(View, { style: styles.wrapper }, this.renderItems(list)));
    }
};
HomeSwiper = __decorate([
    inject('store'),
    observer
], HomeSwiper);
export default HomeSwiper;
//# sourceMappingURL=HomeSwiper.js.map