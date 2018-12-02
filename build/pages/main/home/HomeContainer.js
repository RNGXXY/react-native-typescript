import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
// 自己封装的fetch，要去请求数据
import { Fetch } from '../../../util';
// 样式
import styles from './styles';
// 公用组件
import { Header } from '../../../components/common';
// 子组件
import HoemSwiper from './homeSwiper/HomeSwiper';
import HoemBody from './homeBody/HomeBody';
import HoemFooter from './homeFooter/HomeFooter';
class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        Fetch('/migu/lovev/miguMovie/data/seeFilmData.jsp')
            .then((res) => {
            this.setState({
                list: res
            });
        });
    }
    render() {
        let { list } = this.state;
        if (!list.length)
            return false;
        return (React.createElement(ScrollView
        // 去掉垂直滚动条 
        , { 
            // 去掉垂直滚动条 
            showsVerticalScrollIndicator: false },
            React.createElement(View, { style: styles.wrapper },
                React.createElement(Header, { content: '\u54AA\u5495\u5F71\u9662' }),
                React.createElement(HoemSwiper, { data: list[0] }),
                React.createElement(HoemBody, { data: list[1] }),
                React.createElement(HoemFooter, { data: list[2] }))));
    }
}
export default HomeContainer;
//# sourceMappingURL=HomeContainer.js.map