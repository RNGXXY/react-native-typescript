import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from "react-native";
class Header extends Component {
    render() {
        return (React.createElement(View, { style: styles.head },
            React.createElement(Image, { style: styles.inconImage, source: { uri: '../../../../assets/images/search_grey.png' } }),
            React.createElement(Text, { style: styles.title }, this.props.content),
            React.createElement(Image, { style: styles.inconImage, source: { uri: '../../../../assets/images/mine-active.png' } })));
    }
}
const styles = StyleSheet.create({
    head: {
        height: 45,
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#000',
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        textAlign: 'center'
    },
    inconImage: {
        height: 25,
        width: 25,
    }
});
export default Header;
//# sourceMappingURL=index.js.map