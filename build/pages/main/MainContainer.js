var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import uuid from 'uuid';
import { inject } from 'mobx-react';
import TabNavigator from 'react-native-tab-navigator';
// 样式组件
import styles from './style';
// 四个子组件
import HomeContainer from './home/HomeContainer';
import TicketsContainer from './ticks/TicketsContainer';
import FindContainer from './find/FindContainer';
import MineContainer from './mine/MineContainer';
// 下面的图标
const seeFilm = require('../../../assets/images/mainMenu-seeFilm.png');
const seeFilmActive = require('../../../assets/images/mov-active.png');
const find = require('../../../assets/images/mainMenu-find.png');
const findActive = require('../../../assets/images/find-active.png');
const mine = require('../../../assets/images/mainMenu-member.png');
const mineActive = require('../../../assets/images/mine-active.png');
const tickets = require('../../../assets/images/mainMenu-tickets.png');
const ticketsActive = require('../../../assets/images/mainMenu-ticketsActive.png');
// 泛型可以使用一些规则对一些东西进行约束
// 接口可以定义一些规则
let MainContainer = class MainContainer extends Component {
    constructor(props) {
        super(props);
        // typeScript已经为state做了泛型的约束，将state变成了一个只读类型，所以不能直接直接使用state，需要重新定义
        this.state = {
            selectedTab: 'fims',
            list: [
                { id: uuid(), title: '看片', selected: 'fims', component: React.createElement(HomeContainer, null), icons: { default: seeFilm, active: seeFilmActive } },
                { id: uuid(), title: '购票', selected: 'tickets', component: React.createElement(TicketsContainer, null), icons: { default: tickets, active: ticketsActive } },
                { id: uuid(), title: '发现', selected: 'find', component: React.createElement(FindContainer, null), icons: { default: find, active: findActive } },
                { id: uuid(), title: '我的', selected: 'mine', component: React.createElement(MineContainer, null), icons: { default: mine, active: mineActive } }
            ]
        };
    }
    componentWillMount() {
        this.props.store.Navigation.setNavigation(this.props.navigation);
    }
    renderItem() {
        let { list } = this.state;
        return list.map(item => (React.createElement(TabNavigator.Item, { key: item.id, selected: this.state.selectedTab === item.selected, title: item.title, renderIcon: () => React.createElement(Image, { style: styles.icon, source: item.icons.default }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: item.icons.active }), 
            // badgeText="1"  
            selectedTitleStyle: { color: '#F74444' }, onPress: () => this.setState({ selectedTab: item.selected }) },
            React.createElement(View, null, item.component))));
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(StatusBar, { animated: true, hidden: true, backgroundColor: 'skyblue', translucent: true, barStyle: 'dark-content' }),
            React.createElement(TabNavigator, null, this.renderItem())));
    }
};
// 配置标题栏,屏幕组件可以具有静态属性navigationOptions，该属性称为对象或返回包含各种配置选项的对象的函数。
MainContainer.navigationOptions = {
    title: 'Home',
    headerStyle: {
        backgroundColor: 'skyblue',
        height: 20
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
MainContainer = __decorate([
    inject('store')
], MainContainer);
export default MainContainer;
//# sourceMappingURL=MainContainer.js.map