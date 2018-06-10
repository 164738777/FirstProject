import React, {PureComponent} from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';

export default class PressButtonDemo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {pressing: false};
    }

    _onPressIn = () => {
        console.log('_onPressIn');
        this.setState({pressing: true});
    };

    _onPressOut = () => {
        console.log('_onPressOut');
        this.setState({pressing: false});
    };

    _onPress = () => {
        // after onPressIn, before onPressOut
        // 如果回滴调用了onLongPress，则不会调用这个，用来区别长短按
        console.log('onPress');
    };

    _onLongPress = () => {
        console.log("onLongPress");
    };

    render() {
        return (
            <View style={style.container}>
                <TouchableHighlight
                    onPressIn={this._onPressIn}
                    onPressOut={this._onPressOut}
                    onPress={this._onPress}
                    onLongPress={this._onLongPress}
                    style={{borderRadius: 100}}>
                    <View style={style.button}>
                        <Text style={style.text}>
                            {this.state.pressing ? 'Pressing' : 'UnPress'}
                        </Text>
                    </View>
                </TouchableHighlight>
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
    button: {
        backgroundColor: '#FF0000',
        borderRadius: 100,
        height: 200,
        width: 200,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        margin: 10,
        fontSize: 20
    }
});