import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';
export default class HomeSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        this.setState({
            list: this.props.data.list
        });
    }
    renderItems(list) {
        if (list.length === 0)
            return false;
        // Alert.alert(JSON.stringify(list.length))
        return (React.createElement(Swiper, { autoplay: true }, list.map((item, index) => (React.createElement(View, { key: index, style: styles.slide },
            React.createElement(Image, { style: { width: '100%', height: '100%' }, source: { uri: `http://movie.miguvideo.com/publish/i_www${item.imgSrc}` } }))))));
    }
    render() {
        let { list } = this.state;
        if (list.length === 0)
            return false;
        return (React.createElement(View, { style: styles.wrapper }, this.renderItems(list)));
    }
}
//# sourceMappingURL=HomeSwiper.js.map