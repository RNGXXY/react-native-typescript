import React, { Component } from 'react'
import { View , Text , FlatList , ActivityIndicator , TouchableOpacity} from 'react-native' 
import uuid from  'uuid'
import { inject , observer } from 'mobx-react'

import Fetch from '../../../util/fetch'
import { MovieItem } from '../../../components/common'
import styles from './style'


interface Props{
    store?:any
}

interface State{
    list:any[],
    refreshing: boolean,
    isLoading: boolean,

}

@inject('store')
@observer
export default class perShowing extends Component<Props,State>{

    fl: any
    pageNo: number
    pageSize: number
    constructor(props:any){
        super(props)
        this.state={
            list:[],
            refreshing: false,
            isLoading:false
        }
        this.pageNo=1
        this.pageSize=10
    }

    componentDidMount(){
        this.getListAsync()
    }

    getListAsync(){
        this.setState({
            isLoading: true
        })
        Fetch('/migu/lovev/miguMovie/data/indexFilmComing_data.jsp',{
            method:'POST',
            body:'&cityCode=4751'
        }).then((res:any)=>{
            let handledata = this.handleData(res.movies)
            let new_list = [...this.state.list,...handledata]
            this.setState({
                list:new_list,
                isLoading: false
            })
        })
    }

    // 规定返回值的类型
    handleData(data:any[]):any[]{
        let start = (this.pageNo - 1) * this.pageSize
        let end = start + this.pageSize
        return data.slice(start,end)
    }

    jump=(name:any,po:any)=>{
        this.props.store.Navigation.navigation.navigate(name,po)
    }
    // 记得return出去，不然就是空白的
    renderItem( prop: { item: any, index: number } ){
        let { item, index } = prop
        return ( 
            <TouchableOpacity
               
                onPress = {() => {
                    // alert(JSON.stringify(this.props))
                    this.jump('Detail', {
                        id: item.contentId,name:item.name 
                    })
                    // this.props.store.Navigation.navigation.navigate('Detail', {
                    //     id: item.contentId,name:item.name 
                    // })
                }} 
            >
                <MovieItem info={item}/> 
            </TouchableOpacity>
            
        )
    }

    // 下拉刷新
    _onRefresh = () =>{
        this.setState({refreshing: true})
        setTimeout(() => {
            this.setState({refreshing: false})
            // this.pageNo = 0 
        }, 1000)
    } 

    // 上拉加载
    _onEndReached = ()=>{
        this.pageNo ++
        this.getListAsync()
    }
 
    render(){
        let {list} = this.state
        if (!list.length) return false
       
        return(
            // 坑：外面的盒子不要flex：1
            <View > 
                <FlatList
                    ref = {(fl: any) => this.fl = fl}
                    data = {list}
                    style = {styles.listContainer} 
                    renderItem = { this.renderItem }
                    keyExtractor= {(item: object, index: number) => uuid()}
                    //onRefresh 如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。
                    // 同时你需要正确设置refreshing属性。
                    onRefresh = { this._onRefresh}
                    refreshing = {this.state.refreshing}
                    // onEndReached,当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                    onEndReached = {this._onEndReached}
                    // onEndReachedThreshold决定当距离内容最底部还有多远时触发onEndReached回调。此参数是一个比值而非像素单位。
                    onEndReachedThreshold = {0.1}
                />
                    {
                        this.state.isLoading && <ActivityIndicator size="small" color="#0000ff"  style={{flex:1,justifyContent:'center',alignItems:'center'}} />
                    }
            </View>
        )
    }
} 