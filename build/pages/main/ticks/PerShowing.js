var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import uuid from 'uuid';
import { inject, observer } from 'mobx-react';
import Fetch from '../../../util/fetch';
import { MovieItem } from '../../../components/common';
import styles from './style';
let perShowing = class perShowing extends Component {
    constructor(props) {
        super(props);
        this.jump = (name, po) => {
            this.props.store.Navigation.navigation.navigate(name, po);
        };
        // 下拉刷新
        this._onRefresh = () => {
            this.setState({ refreshing: true });
            setTimeout(() => {
                this.setState({ refreshing: false });
                // this.pageNo = 0 
            }, 1000);
        };
        // 上拉加载
        this._onEndReached = () => {
            this.pageNo++;
            this.getListAsync();
        };
        this.state = {
            list: [],
            refreshing: false,
            isLoading: false
        };
        this.pageNo = 1;
        this.pageSize = 10;
    }
    componentDidMount() {
        this.getListAsync();
    }
    getListAsync() {
        this.setState({
            isLoading: true
        });
        Fetch('/migu/lovev/miguMovie/data/indexFilmComing_data.jsp', {
            method: 'POST',
            body: '&cityCode=4751'
        }).then((res) => {
            let handledata = this.handleData(res.movies);
            let new_list = [...this.state.list, ...handledata];
            this.setState({
                list: new_list,
                isLoading: false
            });
        });
    }
    // 规定返回值的类型
    handleData(data) {
        let start = (this.pageNo - 1) * this.pageSize;
        let end = start + this.pageSize;
        return data.slice(start, end);
    }
    // 记得return出去，不然就是空白的
    renderItem(prop) {
        let { item, index } = prop;
        return (React.createElement(TouchableOpacity, { onPress: () => {
                // alert(JSON.stringify(this.props))
                this.jump('Detail', {
                    id: item.contentId, name: item.name
                });
                // this.props.store.Navigation.navigation.navigate('Detail', {
                //     id: item.contentId,name:item.name 
                // })
            } },
            React.createElement(MovieItem, { info: item })));
    }
    render() {
        let { list } = this.state;
        if (!list.length)
            return false;
        return (
        // 坑：外面的盒子不要flex：1
        React.createElement(View, null,
            React.createElement(FlatList, { ref: (fl) => this.fl = fl, data: list, style: styles.listContainer, renderItem: this.renderItem, keyExtractor: (item, index) => uuid(), 
                //onRefresh 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。
                // 同时你需要正确设置refreshing属性。
                onRefresh: this._onRefresh, refreshing: this.state.refreshing, 
                // onEndReached,当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                onEndReached: this._onEndReached, 
                // onEndReachedThreshold决定当距离内容最底部还有多远时触发onEndReached回调。此参数是一个比值而非像素单位。
                onEndReachedThreshold: 0.1 }),
            this.state.isLoading && React.createElement(ActivityIndicator, { size: "small", color: "#0000ff", style: { flex: 1, justifyContent: 'center', alignItems: 'center' } })));
    }
};
perShowing = __decorate([
    inject('store'),
    observer
], perShowing);
export default perShowing;
//# sourceMappingURL=PerShowing.js.map