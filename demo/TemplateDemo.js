import React, {PureComponent} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class TemplateDemo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={style.container}>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        margin: 10,
        fontSize: 20
    }
});