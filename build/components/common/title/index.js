import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
export default class Title extends Component {
    render() {
        return (React.createElement(View, { style: styles.titleWrapper },
            React.createElement(ImageBackground, { source: require('../../../../assets/images/module-icon.png'), resizeMode: 'contain', style: styles.imageback }),
            React.createElement(Text, { style: styles.content }, this.props.content)));
    }
}
const styles = StyleSheet.create({
    titleWrapper: {
        height: 45,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 10
    },
    imageback: {
        height: '100%',
        width: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        color: '#666',
        fontSize: 16
    }
});
//# sourceMappingURL=index.js.map