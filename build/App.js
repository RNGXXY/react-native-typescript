import React, { Component } from 'react';
import { Provider } from 'mobx-react';
// 路由导航组件
import { createStackNavigator } from "react-navigation";
// 子组件，这里以屏幕组件为路由组件
import MainContainer from './pages/main/MainContainer';
import DetailContainer from './pages/detai/DetailContainer';
import store from './store';
class App extends Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(AppNavigator, null)));
    }
}
// 第一个参数：路线配置，第二个参数：初始化渲染的组件
const AppNavigator = createStackNavigator({
    Home: MainContainer,
    Detail: DetailContainer
}, {
    initialRouteName: "Home"
});
export default App;
//# sourceMappingURL=App.js.map