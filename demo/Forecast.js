import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

/**
 * 封装Component
 */
export default class Forecast extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.bigText}>
                    {this.props.main}
                </Text>
                <Text style={style.mainText}>
                    {this.props.description}
                </Text>
                <Text style={style.bigText}>
                    {this.props.temp} 'C
                </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {height: 130},
    bigText: {
        fontSize: 20,
        flex: 2,
        textAlign: "center",
        color: "#FFFFFF",
        margin: 10
    },
    mainText: {
        fontSize: 16,
        flex: 1,
        textAlign: "center",
        color: "#FFFFFF",
    }
});