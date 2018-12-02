import React , {Component} from 'react';
import {  View, Text, Image } from 'react-native';
import uuid from 'uuid'

import TabNavigator from 'react-native-tab-navigator';
import styles from './style'

// 四个子组件
import HomeContainer from './home/HomeContainer'

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
    age?:number
}

interface State {
    selectedTab:String,
    list:Array<any>
} 

// 泛型可以使用一些规则对一些东西进行约束
// 接口可以定义一些规则
class MainContainer extends Component<Props,State>{
    constructor(props:any){
        super(props)
        // typeScript已经为state做了泛型的约束，将state变成了一个只读类型，所以不能直接直接使用state，需要重新定义
        this.state={
            selectedTab:'fims',
            list:[
                { id: uuid(), title: '看片', selected: 'fims', component: <HomeContainer/>, icons: { default: seeFilm, active: seeFilmActive }},
                { id: uuid(), title: '购票', selected: 'tickets', component: <Text>tickets</Text>, icons: { default: tickets, active: ticketsActive }},
                { id: uuid(), title: '发现', selected: 'find', component: <Text>find</Text>, icons: { default: find, active: findActive }},
                { id: uuid(), title: '我的', selected: 'mine', component: <Text>mine</Text>, icons: { default: mine, active: mineActive }}
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
            <View style = {{flex: 1, paddingTop: 20}}>
                <TabNavigator>
                   {this.renderItem()}
                </TabNavigator>
            </View>
        )
    }

}

export default MainContainer 