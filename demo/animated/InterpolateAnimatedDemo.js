import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, Animated, Easing, Dimensions, Image, TouchableOpacity} from 'react-native';

const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

// https://www.jianshu.com/p/7fd37d8ed138
export default class InterpolateAnimatedDemo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            animatedValue: new Animated.Value(0) // 初始值设为0
        };

        this.rotateAnimated = Animated.timing(
            this.state.animatedValue,
            {
                toValue: 1,  //透明度动画最终值
                duration: 3000,   //动画时长3000毫秒
                easing: Easing.in
            }
        );
    }

    _startAnimated() {
        // 无限调用
        // this.state.animatedValue.setValue(0);
        // this.rotateAnimated.start(() => this._startAnimated());

        this.rotateAnimated.start(() => this.state.animatedValue.setValue(0));
    }

    render() {
        const rotateZ = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        const opacity = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        });

        const rotateX = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        });

        const textSize = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        });

        const marginLeft = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 200, 0]
        });

        return (
            <View style={styles.mainStyle}>

                <Animated.View
                    style={{
                        marginTop: 10,
                        width: 100,
                        height: 100,
                        transform: [
                            {rotateZ: rotateZ},
                        ]
                    }}
                >
                    <Image style={{width: 100, height: 100}}
                           source={{uri: 'out_loading_image.png'}}>
                    </Image>
                </Animated.View>

                <Animated.View
                    style={{
                        marginTop: 10,
                        width: 100,
                        height: 100,
                        opacity: opacity,
                        backgroundColor: 'red',
                    }}
                />

                <Animated.Text
                    style={{
                        marginTop: 10,
                        width: 100,
                        fontSize: 18,
                        color: 'white',
                        backgroundColor: 'red',
                        transform: [
                            {rotateX: rotateX},
                        ]
                    }}
                >
                    窗外风好大，我没有穿褂。
                </Animated.Text>

                <Animated.Text
                    style={{
                        marginTop: 10,
                        height: 100,
                        lineHeight: 100,
                        fontSize: textSize,
                        color: 'red'
                    }}
                >
                    IAMCJ嘿嘿嘿
                </Animated.Text>

                <Animated.View
                    style={{
                        marginTop: 10,
                        width: 100,
                        height: 100,
                        marginLeft: marginLeft,
                        backgroundColor: 'red',
                    }}
                />

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width: 200, height: 100, textAlign: 'center', lineHeight: 100}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        width: screenW,
        backgroundColor: "#ffffff",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 100,
    },
    touchStyle: {
        width: 200,
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: screenW / 2 - 100,
    },
});