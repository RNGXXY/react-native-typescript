import React , {Component} from 'react';
import {  View, Text, Image ,StatusBar } from 'react-native';
import uuid from 'uuid'
import { inject } from 'mobx-react'
import TabNavigator from 'react-native-tab-navigator';

// 样式组件
import styles from './style'

// 四个子组件
import HomeContainer from './home/HomeContainer'
import TicketsContainer from './ticks/TicketsContainer'
import FindContainer from './find/FindContainer'
import MineContainer from './mine/MineContainer'

// 下面的图标
const seeFilm = require('../../../assets/images/mainMenu-seeFilm.png')
const seeFilmActive = require('../../../assets/images/mov-active.png')
const find = require('../../../assets/images/mainMenu-find.png')
const findActive = require('../../../assets/images/find-active.png')
const mine = require('../../../assets/images/mainMenu-member.png')
const mineActive = require('../../../assets/images/mine-active.png')
const tickets = require('../../../assets/images/mainMenu-tickets.png')
const ticketsActive = require('../../../assets/images/mainMenu-ticketsActive.png')
 

interface Props {
    name:String, 
    age?:number,
    store?:any,
    navigation?:any,
}

interface State {
    selectedTab:String,
    list:Array<any>
} 

// 泛型可以使用一些规则对一些东西进行约束
// 接口可以定义一些规则
@inject('store')
class MainContainer extends Component<Props,State>{
    // 配置标题栏,屏幕组件可以具有静态属性navigationOptions，该属性称为对象或返回包含各种配置选项的对象的函数。
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: 'skyblue',
          height:20
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
  
    componentWillMount () {
        this.props.store.Navigation.setNavigation(this.props.navigation)
    }

    constructor(props:any){
        super(props)
        // typeScript已经为state做了泛型的约束，将state变成了一个只读类型，所以不能直接直接使用state，需要重新定义
        this.state={
            selectedTab:'fims',
            list:[
                { id: uuid(), title: '看片', selected: 'fims', component: <HomeContainer/>, icons: { default: seeFilm, active: seeFilmActive }},
                { id: uuid(), title: '购票', selected: 'tickets', component: <TicketsContainer/>, icons: { default: tickets, active: ticketsActive }},
                { id: uuid(), title: '发现', selected: 'find', component: <FindContainer/>, icons: { default: find, active: findActive }},
                { id: uuid(), title: '我的', selected: 'mine', component: <MineContainer/>, icons: { default: mine, active: mineActive }}
            ]
        }
    }

    

    renderItem(){
        let { list } = this.state
        return list.map(item=>(
            <TabNavigator.Item
                key = {item.id}
                selected={this.state.selectedTab === item.selected}
                title={item.title}
                renderIcon={() => <Image style={styles.icon} source={item.icons.default} />}
                renderSelectedIcon={() => <Image style={styles.icon}  source={item.icons.active} />}
                // badgeText="1"  
                selectedTitleStyle={{color:'#F74444'}}
                onPress={() => this.setState({ selectedTab: item.selected })}>
                <View>{item.component}</View>
            </TabNavigator.Item>
        ))
    }
    render () {
        return (
            <View style = {{flex: 1}}>
                <StatusBar  
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={true}  //是否隐藏状态栏。  
                    backgroundColor={'skyblue'} //状态栏的背景色  
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')   
                />
                <TabNavigator>
                   {this.renderItem()} 
                </TabNavigator> 
            </View>
        )
    }

}

export default MainContainer 